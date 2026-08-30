import { createServerFn } from "@tanstack/react-start";
import { applicationSchema, CARD_META } from "./ambassador";

const NOTIFY_EMAIL = "marketingsimi@ckmsyts.sk";

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("ambassador_applications").insert({
      // video_urls je nový stĺpec, typy sa zregenerujú po nasadení
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...({} as any),
      full_name: data.fullName,
      email: data.email.toLowerCase(),
      phone: data.phone,
      city: data.city,
      birth_date: data.birthDate,
      card_type: data.cardType,
      holder_status: data.holderStatus,
      card_number: data.cardNumber || null,
      school_name: data.schoolName || null,
      study_form: data.studyForm || null,
      academic_year: data.academicYear || null,
      employer_name: data.employerName || null,
      job_position: data.jobPosition || null,
      teaching_scope: data.teachingScope || null,
      instagram_handle: data.instagramHandle || null,
      tiktok_handle: data.tiktokHandle || null,
      portfolio_url: null,
      video_urls: data.videoUrls,
      video1_url: data.videoUrls[0],
      video2_url: data.videoUrls[1] ?? null,
      video3_url: data.videoUrls[2] ?? null,
      motivation: data.motivation || null,
      experience: null,
      eligibility_confirmed: data.eligibilityConfirmed,
      terms_accepted: data.termsAccepted,

      content_use_accepted: data.contentUseAccepted,
      gdpr_accepted: data.gdprAccepted,
    });

    if (error) {
      if (error.code === "23505" || error.code === "23514" || error.code === "23000") {
        throw new Error("Na tento e-mail už prihlášku máme.");
      }
      if (error.code === "23505" || error.message.includes("duplicate key")) {
        throw new Error("Na tento e-mail už prihlášku máme.");
      }
      throw new Error("Prihlášku sa nepodarilo odoslať. Skús to prosím znova.");
    }

    // Notifikačný e-mail – chyba odoslania nemá zlyhať prihlášku
    const resendKey = process.env["RESEND_API_KEY"];
    if (resendKey) {
      try {
        const rows = [
          ["Meno", data.fullName],
          ["E-mail", data.email],
          ["Telefón", data.phone],
          ["Mesto", data.city],
          ["Dátum narodenia", data.birthDate],
          ["Preukaz", CARD_META[data.cardType].label],
          [
            "Stav preukazu",
            data.holderStatus === "existing" ? `Už má preukaz (${data.cardNumber || "?"})` : "Chce nový",
          ],
          ["Škola / inštitúcia", data.schoolName || data.employerName || "–"],
          ["Instagram", data.instagramHandle || "–"],
          ["TikTok", data.tiktokHandle || "–"],
          ["Odkazy na videá", data.videoUrls.join("\n")],
          ["Poznámka", data.motivation || "–"],
        ]
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Ambasádorský program <onboarding@resend.dev>",
            to: [NOTIFY_EMAIL],
            subject: `Nová prihláška ambasádora: ${data.fullName} (${CARD_META[data.cardType].label})`,
            text: rows,
          }),
        });
      } catch {
        // e-mail sa nepodaril – prihláška je uložená, pokračujeme ďalej
      }
    }

    return { ok: true as const };
  });

export const getRemainingSpots = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PROGRAM_CAPACITY } = await import("./ambassador");

  const { count } = await supabaseAdmin
    .from("ambassador_applications")
    .select("id", { count: "exact", head: true });

  const used = count ?? 0;
  return { capacity: PROGRAM_CAPACITY, remaining: Math.max(PROGRAM_CAPACITY - used, 0) };
});
