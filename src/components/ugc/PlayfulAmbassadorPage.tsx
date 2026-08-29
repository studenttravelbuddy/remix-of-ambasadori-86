import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Film,
  Lightbulb,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ApplicationForm } from "@/components/ugc/ApplicationForm";
import { BrandMark, BrandMarkRow } from "@/components/ugc/BrandMark";
import { CARD_META, CARD_TYPES } from "@/lib/ambassador";
import { TERMS_PAGE_URL } from "@/lib/ambassador-assets";

const steps = [
  {
    number: "01",
    title: "Natoč 3 videá",
    text: "Krátke videá približne 30–60 sekúnd. Stačí mobil, prirodzenosť a tvoj vlastný pohľad.",
    icon: Film,
    color: "bg-brand-yellow text-foreground",
    position: "lg:mr-auto",
  },
  {
    number: "02",
    title: "Pošli nám ich",
    text: "Nahraj ich na Disk Google, Dropbox alebo WeTransfer a vlož tri odkazy priamo do formulára.",
    icon: Send,
    color: "bg-brand-blue text-primary-foreground",
    position: "lg:ml-auto",
  },
  {
    number: "03",
    title: "Schválime = preukaz zadarmo",
    text: "Ak videá schválime, dostaneš ISIC, ITIC alebo EURO<26 na jeden rok zadarmo.",
    icon: Check,
    color: "bg-brand-pink text-primary-foreground",
    position: "lg:mr-auto",
  },
] as const;

const ideas = [
  "3 veci, ktoré som zistil/a až po/na škole",
  "Koľko som ušetril/a s preukazom?",
  "Toto som s preukazom vôbec nečakal/a",
  "Kam chodím s preukazom na zľavu",
  "Ako využiť preukaz na cestovanie",
  "Alebo tvoj vlastný nápad",
] as const;

const faqs = [
  ["Musím mať veľa followerov?", "Nie. Nesledujeme počet followerov ani predchádzajúce skúsenosti s tvorbou obsahu."],
  ["Ako pošlem videá?", "Nahraj ich na Disk Google, Dropbox, WeTransfer alebo iné úložisko a do formulára vlož odkazy na všetky 3 videá."],
  ["Čo ak video neschválite?", "Dáme ti spätnú väzbu a video môžeš upraviť alebo natočiť nanovo."],
  ["Kde sa moje videá objavia?", "Schválené videá môžeme použiť v komunikácii ISIC, ITIC a EURO<26, najmä na sociálnych sieťach, webe a v online kampaniach."],
  ["Musím už mať preukaz?", "Nie. Stačí, že máš na zvolený preukaz nárok a potvrdíš to vo formulári."],
] as const;

function scrollToForm() {
  document.getElementById("formular")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PlayfulAmbassadorPage() {
  return (
    <main className="overflow-hidden bg-background">
      <PlayfulHero />
      <CampaignTeaser />
      <Journey />
      <VideoIdeas />
      <Eligibility />
      <PlayfulFaq />
      <div className="relative bg-brand-yellow py-4">
        <div aria-hidden className="mx-auto h-1 w-24 rounded-full bg-brand-pink" />
      </div>
      <ApplicationForm variant="playful" />
      <PlayfulFooter />
    </main>
  );
}

function PlayfulHero() {
  return (
    <header className="relative min-h-[88svh] bg-brand-teal text-foreground">
      <div aria-hidden className="absolute -right-20 top-24 h-44 w-44 rounded-full border-[28px] border-brand-yellow sm:h-64 sm:w-64" />
      <div aria-hidden className="absolute -left-16 bottom-16 h-32 w-32 rotate-12 bg-brand-pink" />
      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-10">
        <BrandMarkRow onLight={false} className="relative z-10" />
        <div className="flex flex-1 flex-col justify-center py-12 lg:max-w-4xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-foreground">
            <Sparkles aria-hidden className="size-5" /> Ambasádorský program
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.98] text-balance-tight sm:text-7xl lg:text-8xl">
            <span className="block text-brand-yellow">3 videá.</span>
            Preukaz na rok zadarmo.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
            Natoč ich na mobil, pošli nám ich a keď ich schválime, získaš ISIC, ITIC alebo EURO&lt;26. Bez výberového konania.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="h-12 bg-brand-yellow px-7 font-bold text-foreground shadow-none hover:bg-brand-yellow/90"
            >
              Poslať videá <ArrowDown aria-hidden />
            </Button>
            <a href="#ako-to-funguje" className="text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4">
              Ako to funguje
            </a>
          </div>
        </div>
        <p className="relative z-10 text-xs font-bold uppercase tracking-wider text-foreground">
          ISIC · ITIC · EURO&lt;26
        </p>
      </div>
    </header>
  );
}

function CampaignTeaser() {
  return (
    <section aria-labelledby="campaign-title" className="bg-brand-yellow px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.6fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-foreground">Kampaň 2026</p>
          <h2 id="campaign-title" className="mt-2 font-display text-4xl font-black text-foreground sm:text-6xl">
            Ready for more?
          </h2>
          <p className="mt-3 font-bold text-foreground">1. 9. 2026 – 17. 11. 2026</p>
        </div>
        <div className="flex aspect-[16/7] min-h-48 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-foreground bg-background p-8 text-center">
          <div>
            <Sparkles aria-hidden className="mx-auto size-8 text-brand-pink" />
            <p className="mt-3 font-display text-2xl font-black text-foreground">Ready for more?</p>
            <p className="mt-1 text-sm font-medium text-foreground">Priestor pre kampaňový banner</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="ako-to-funguje" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wider text-brand-pink">Jednoduché. Naozaj.</p>
          <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">Tvoja cesta k preukazu</h2>
        </div>
        <div className="relative mt-14 lg:px-20">
          <svg
            aria-hidden
            viewBox="0 0 800 780"
            preserveAspectRatio="none"
            className="playful-route absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-[62%] -translate-x-1/2 text-brand-yellow lg:block"
          >
            <path d="M130 20 C720 100 720 300 400 360 C40 430 40 650 670 750" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeDasharray="2 34" />
          </svg>
          <div aria-hidden className="absolute bottom-16 left-7 top-8 w-2 rounded-full bg-brand-yellow lg:hidden" />
          <div className="relative space-y-10 lg:space-y-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className={`relative ml-10 max-w-lg rounded-lg border-2 border-foreground bg-card p-6 shadow-[8px_8px_0_var(--brand-teal)] sm:p-8 lg:ml-0 ${step.position}`}>
                  <div className={`absolute -left-14 top-7 flex size-12 items-center justify-center rounded-full border-2 border-foreground lg:-left-6 ${step.color}`}>
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <span className="font-display text-sm font-black text-brand-pink">KROK {step.number}</span>
                  <h3 className="mt-2 font-display text-2xl font-black sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-14 text-center">
          <Button size="lg" onClick={scrollToForm} className="h-12 px-7 font-bold">
            Idem do toho <ArrowRight aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}

function VideoIdeas() {
  return (
    <section className="bg-brand-blue py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-brand-yellow">Tvoje video, tvoj pohľad</p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">Čo môžeš natáčať?</h2>
          </div>
          <p className="max-w-md text-primary-foreground/80">Nemusíš byť influencer. Chceme prirodzený obsah, ktorý nepôsobí ako reklama.</p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <li key={idea} className="flex min-h-32 items-start gap-4 rounded-lg bg-background p-5 text-foreground">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-display font-black">{index + 1}</span>
              <p className="pt-1 font-bold leading-snug">„{idea}“</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wider text-brand-teal">Vyber si správne</p>
          <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">Na ktorý preukaz máš nárok?</h2>
          <p className="mt-4 text-muted-foreground">Zapojiť sa môžeš s existujúcim preukazom aj bez neho. Vo formulári zvoľ ten, ktorého podmienky spĺňaš.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CARD_TYPES.map((card, index) => (
            <article key={card} className={`${CARD_META[card].accentClass} relative overflow-hidden rounded-lg border-2 border-card-accent bg-card p-6`}>
              <span aria-hidden className="absolute right-0 top-0 h-3 w-20 bg-card-accent" />
              <span className="font-display text-xs font-black text-card-accent">0{index + 1}</span>
              <BrandMark card={card} className="mt-4" />
              <h3 className="mt-5 font-display text-xl font-black">{CARD_META[card].tagline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{CARD_META[card].eligibility}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-lg bg-brand-pink p-6 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <Users aria-hidden className="mt-0.5 size-6 shrink-0 text-brand-yellow" />
            <p className="max-w-2xl text-sm leading-relaxed">Zaškrtnutím vo formulári digitálne prijmeš podmienky programu: dodáš 3 videá a po ich schválení dostaneš preukaz na rok zadarmo.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-primary-foreground bg-transparent text-primary-foreground hover:bg-brand-yellow hover:text-foreground">
            <Link to={TERMS_PAGE_URL}>Pozrieť podmienky</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PlayfulFaq() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Lightbulb aria-hidden className="size-10 text-brand-orange" />
          <h2 className="mt-5 font-display text-4xl font-black sm:text-5xl">Pýtaš sa?<br />Odpovedáme.</h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="border-brand-teal">
              <AccordionTrigger className="text-left font-display text-lg font-bold">{question}</AccordionTrigger>
              <AccordionContent className="pr-8 leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function PlayfulFooter() {
  return (
    <footer className="bg-brand-blue py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandMarkRow onLight={false} />
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-primary-foreground">Program organizuje združenie CKM SYTS, výhradný zástupca preukazov ISIC, ITIC a EURO&lt;26 na Slovensku.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold">
          <a href="#ako-to-funguje" className="hover:text-brand-yellow">Ako to funguje</a>
          <Link to={TERMS_PAGE_URL} className="hover:text-brand-yellow">Podmienky</Link>
          <Button type="button" variant="link" onClick={scrollToForm} className="h-auto p-0 font-bold text-primary-foreground hover:text-brand-yellow">Poslať videá</Button>
        </div>
      </div>
    </footer>
  );
}