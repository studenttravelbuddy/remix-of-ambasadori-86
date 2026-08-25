import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { BrandMark } from "@/components/ugc/BrandMark";
import {
  CARD_META,
  CARD_TYPES,
  applicationSchema,
  type ApplicationInput,
  type CardType,
} from "@/lib/ambassador";
import { submitApplication } from "@/lib/ambassador.functions";
import { cn } from "@/lib/utils";

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  birthDate: "",
  cardType: undefined as unknown as CardType,
  holderStatus: undefined as unknown as "existing" | "new",
  cardNumber: "",
  schoolName: "",
  studyForm: "",
  academicYear: "",
  employerName: "",
  jobPosition: "",
  teachingScope: "",
  instagramHandle: "",
  tiktokHandle: "",
  video1Url: "",
  video2Url: "",
  video3Url: "",
  motivation: "",

  eligibilityConfirmed: false as unknown as true,
  termsAccepted: false as unknown as true,
  contentUseAccepted: false as unknown as true,
  gdprAccepted: false as unknown as true,
};

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const send = useServerFn(submitApplication);

  const form = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const cardType = form.watch("cardType");
  const holderStatus = form.watch("holderStatus");

  async function onSubmit(values: ApplicationInput) {
    try {
      await send({ data: values });
      setSubmitted(true);
    } catch (error) {
      toast.error(
        error instanceof Error && error.message
          ? error.message
          : "Prihlášku sa nepodarilo odoslať. Skús to prosím znova.",
      );
    }
  }

  if (submitted) {
    return (
      <section id="formular" className="bg-secondary py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-3xl font-black sm:text-4xl">Videá sú odoslané 🎉</h2>
          <p className="mt-4 text-muted-foreground">
            Ďakujeme! Videá si prezrieme a ozveme sa ti e-mailom. Ak ich schválime, dostaneš preukaz
            na rok zadarmo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formular" className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Pošli nám svoje videá</h2>
        <p className="mt-3 text-muted-foreground">
          Vyplň základné údaje, zvoľ preukaz, na ktorý máš nárok, a vlož odkazy na 3 videá.
        </p>


        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 space-y-8 rounded-3xl border border-border bg-card p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meno a priezvisko</FormLabel>
                    <FormControl>
                      <Input placeholder="Jana Nováková" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jana@email.sk" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefón</FormLabel>
                    <FormControl>
                      <Input placeholder="+421 900 000 000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mesto</FormLabel>
                    <FormControl>
                      <Input placeholder="Bratislava" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dátum narodenia</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="cardType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>O ktorý preukaz máš záujem?</FormLabel>
                  <FormDescription>
                    Vyber jeden preukaz. Nižšie potvrdíš, že naň máš nárok.
                  </FormDescription>
                  <FormControl>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {CARD_TYPES.map((card) => {
                        const active = field.value === card;
                        return (
                          <button
                            key={card}
                            type="button"
                            onClick={() => field.onChange(card)}
                            aria-pressed={active}
                            className={cn(
                              CARD_META[card].accentClass,
                              "rounded-2xl border-2 p-4 text-left transition-all",
                              active
                                ? "border-card-accent-strong bg-card-accent/10 shadow-md"
                                : "border-border hover:border-card-accent",
                            )}
                          >
                            <BrandMark card={card} className="h-8" />
                            <p className="mt-3 font-display text-sm font-bold">
                              {CARD_META[card].tagline}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {CARD_META[card].eligibility}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="holderStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Máš už tento preukaz?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col gap-2 sm:flex-row sm:gap-6"
                    >
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="existing" />
                        </FormControl>
                        <FormLabel className="font-normal">Áno, už ho mám</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="new" />
                        </FormControl>
                        <FormLabel className="font-normal">Nie, chcem nový</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {holderStatus === "existing" && (
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Číslo preukazu</FormLabel>
                    <FormControl>
                      <Input placeholder="S 421..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {cardType === "isic" && (
              <div className="grid gap-5 sm:grid-cols-3">
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Názov školy</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studyForm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Forma štúdia</FormLabel>
                      <FormControl>
                        <Input placeholder="denné SŠ / denné VŠ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="academicYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Školský rok</FormLabel>
                      <FormControl>
                        <Input placeholder="2026/2027" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {cardType === "itic" && (
              <div className="grid gap-5 sm:grid-cols-3">
                <FormField
                  control={form.control}
                  name="employerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Škola / inštitúcia</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pozícia</FormLabel>
                      <FormControl>
                        <Input placeholder="učiteľ/ka" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teachingScope"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rozsah vyučovania</FormLabel>
                      <FormControl>
                        <Input placeholder="18 h / týždeň" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {cardType === "euro26" && (
              <p className="rounded-xl border border-border bg-secondary p-4 text-sm text-muted-foreground">
                Nárok na EURO&lt;26 overíme podľa dátumu narodenia – platí pre mladých do 26 rokov.
              </p>
            )}

            <div className="space-y-5 rounded-2xl border-2 border-brand-teal/40 bg-brand-teal-light p-5">
              <div>
                <h3 className="font-display text-lg font-bold">Tvoje 3 videá</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Nahraj videá na Disk Google, Dropbox, WeTransfer alebo iné úložisko a vlož sem
                  odkazy. Videá musia byť prístupné na prezretie.
                </p>
              </div>
              {(
                [
                  ["video1Url", "Odkaz na video 1"],
                  ["video2Url", "Odkaz na video 2"],
                  ["video3Url", "Odkaz na video 3"],
                ] as const
              ).map(([name, label]) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="instagramHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram (nepovinné)</FormLabel>
                    <FormControl>
                      <Input placeholder="@meno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tiktokHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TikTok (nepovinné)</FormLabel>
                    <FormControl>
                      <Input placeholder="@meno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chceš nám niečo dopísať? (nepovinné)</FormLabel>
                  <FormControl>
                    <Textarea rows={3} placeholder="Napríklad k čomu sa videá vzťahujú." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <div className="space-y-3">
              {(
                [
                  [
                    "eligibilityConfirmed",
                    "Potvrdzujem, že spĺňam podmienky nároku na zvolený preukaz.",
                  ],
                  [
                    "termsAccepted",
                    <>
                      Súhlasím s{" "}
                      <a
                        href={TERMS_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-teal-dark underline underline-offset-2"
                      >
                        podmienkami ambasádorského programu (PDF)
                      </a>{" "}
                      – zaškrtnutím potvrdzujem, že dodám 3 videá podľa podmienok a po ich schválení
                      dostanem preukaz na rok zadarmo. Podmienky prijímam digitálne, nič sa
                      nepodpisuje.
                    </>,
                  ],
                  [
                    "contentUseAccepted",
                    <>
                      Súhlasím s použitím vytvoreného obsahu v komunikácii ISIC / ITIC / EURO&lt;26
                      v rozsahu licencie podľa{" "}
                      <a
                        href={TERMS_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-teal-dark underline underline-offset-2"
                      >
                        podmienok programu
                      </a>
                      .
                    </>,
                  ],
                  ["gdprAccepted", "Súhlasím so spracovaním osobných údajov na účely programu."],
                ] as const
              ).map(([name, label]) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-3">
                      <FormControl>
                        <Checkbox
                          checked={Boolean(field.value)}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel className="text-sm font-normal leading-snug">{label}</FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </div>


            <p className="text-xs text-muted-foreground">
              Videá skontrolujeme a ozveme sa ti e-mailom. Ak ich schválime, dostaneš preukaz na rok
              zadarmo.
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="w-full sm:w-auto"
            >
              {form.formState.isSubmitting ? "Odosielam…" : "Poslať videá"}
            </Button>


          </form>
        </Form>
      </div>
    </section>
  );
}
