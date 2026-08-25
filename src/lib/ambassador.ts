import { z } from "zod";

export const CARD_TYPES = ["euro26", "isic", "itic"] as const;
export type CardType = (typeof CARD_TYPES)[number];

export const PROGRAM_CAPACITY = 200;

export const CARD_META: Record<
  CardType,
  {
    label: string;
    tagline: string;
    eligibility: string;
    accentClass: string;
  }
> = {
  euro26: {
    label: "EURO<26",
    tagline: "Pre mladých do 26 rokov",
    eligibility: "Vek do 26 rokov (vrátane).",
    accentClass: "card-euro26",
  },
  isic: {
    label: "ISIC",
    tagline: "Pre študentov SŠ a VŠ",
    eligibility: "Denné štúdium na strednej alebo vysokej škole.",
    accentClass: "card-isic",
  },
  itic: {
    label: "ITIC",
    tagline: "Pre učiteľov a pedagógov",
    eligibility: "Pedagogický zamestnanec s dostatočným rozsahom vyučovania.",
    accentClass: "card-itic",
  },
};

export const EURO26_MAX_AGE = 26;

export function ageOn(birthDate: string, reference = new Date()): number {
  const born = new Date(birthDate);
  let age = reference.getFullYear() - born.getFullYear();
  const monthDiff = reference.getMonth() - born.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < born.getDate())) age -= 1;
  return age;
}

const requiredText = (max: number, message: string) =>
  z.string().trim().min(2, { message }).max(max, { message: `Maximálne ${max} znakov.` });

const videoUrl = z
  .string()
  .trim()
  .max(500)
  .regex(/^https?:\/\/\S+$/, { message: "Vlož odkaz na video (začína https://)." });


export const applicationSchema = z
  .object({
    fullName: requiredText(100, "Zadaj meno a priezvisko."),
    email: z
      .string()
      .trim()
      .email({ message: "Zadaj platný e-mail." })
      .max(255, { message: "Maximálne 255 znakov." }),
    phone: z
      .string()
      .trim()
      .min(9, { message: "Zadaj platné telefónne číslo." })
      .max(20, { message: "Maximálne 20 znakov." })
      .regex(/^[+0-9 ()/-]+$/, { message: "Telefón môže obsahovať len čísla a + ( ) - /." }),
    city: requiredText(80, "Zadaj mesto."),
    birthDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Zadaj dátum narodenia." })
      .refine((value) => {
        const age = ageOn(value);
        return age >= 12 && age <= 90;
      }, { message: "Zadaj reálny dátum narodenia." }),
    cardType: z.enum(CARD_TYPES, { errorMap: () => ({ message: "Zvoľ preukaz." }) }),
    holderStatus: z.enum(["existing", "new"], {
      errorMap: () => ({ message: "Zvoľ, či preukaz už máš." }),
    }),
    cardNumber: z.string().trim().max(40).optional().or(z.literal("")),
    schoolName: z.string().trim().max(150).optional().or(z.literal("")),
    studyForm: z.string().trim().max(60).optional().or(z.literal("")),
    academicYear: z.string().trim().max(30).optional().or(z.literal("")),
    employerName: z.string().trim().max(150).optional().or(z.literal("")),
    jobPosition: z.string().trim().max(100).optional().or(z.literal("")),
    teachingScope: z.string().trim().max(100).optional().or(z.literal("")),
    instagramHandle: z.string().trim().max(60).optional().or(z.literal("")),
    tiktokHandle: z.string().trim().max(60).optional().or(z.literal("")),
    video1Url: videoUrl,
    video2Url: videoUrl,
    video3Url: videoUrl,
    motivation: z.string().trim().max(1500).optional().or(z.literal("")),

    eligibilityConfirmed: z.literal(true, {
      errorMap: () => ({ message: "Potvrď, že máš na zvolený preukaz nárok." }),
    }),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: "Súhlas s podmienkami programu je povinný." }),
    }),
    contentUseAccepted: z.literal(true, {
      errorMap: () => ({ message: "Súhlas s použitím obsahu je povinný." }),
    }),
    gdprAccepted: z.literal(true, {
      errorMap: () => ({ message: "Súhlas so spracovaním údajov je povinný." }),
    }),
  })
  .superRefine((data, ctx) => {
    const require = (field: keyof typeof data, message: string) => {
      if (!data[field] || String(data[field]).trim().length < 2) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: [field], message });
      }
    };

    if (data.holderStatus === "existing") {
      require("cardNumber", "Zadaj číslo svojho preukazu.");
    }

    if (data.cardType === "isic") {
      require("schoolName", "Zadaj názov školy.");
      require("studyForm", "Zvoľ formu štúdia.");
      require("academicYear", "Zadaj školský rok.");
    }

    if (data.cardType === "itic") {
      require("employerName", "Zadaj názov školy alebo inštitúcie.");
      require("jobPosition", "Zadaj svoju pozíciu.");
      require("teachingScope", "Zadaj rozsah vyučovania.");
    }

    if (data.cardType === "euro26" && ageOn(data.birthDate) >= EURO26_MAX_AGE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["cardType"],
        message:
          "Na EURO<26 majú nárok ľudia do 26 rokov. Ak študuješ, zvoľ ISIC, ak učíš, zvoľ ITIC.",
      });
    }
  });

export type ApplicationInput = z.infer<typeof applicationSchema>;
