import { createServerFn } from "@tanstack/react-start";
import { applicationSchema } from "./ambassador";

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("ambassador_applications").insert({
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
      video1_url: data.video1Url,
      video2_url: data.video2Url,
      video3_url: data.video3Url,
      motivation: data.motivation || null,
      experience: null,

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
