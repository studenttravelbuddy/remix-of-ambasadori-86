import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BrandMark, BrandMarkRow } from "@/components/ugc/BrandMark";
import { CARD_META, CARD_TYPES } from "@/lib/ambassador";

function scrollToForm() {
  document.getElementById("formular")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <header className="bg-brand-teal-dark text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-16 sm:py-20">
        <BrandMarkRow onLight={false} />
        <h1 className="font-display text-4xl font-black leading-[1.05] text-balance-tight sm:text-5xl">
          Natoč 3 krátke videá a máš <span className="text-brand-teal">ISIC, ITIC alebo
          EURO&lt;26</span> na rok zadarmo.
        </h1>
        <p className="max-w-2xl text-lg text-primary-foreground/85">
          Žiadne výberové konanie. Natoč videá na mobil, pošli nám ich vo formulári a keď ich
          schválime, dostaneš preukaz zadarmo.
        </p>
        <div>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-brand-teal text-brand-teal-dark hover:bg-brand-teal/90"
          >
            Poslať videá
          </Button>
        </div>
      </div>
    </header>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Natoč 3 videá",
      text: "Krátke videá približne 30–60 sekúnd, stačí mobil. Témy sú nižšie, alebo príď s vlastným nápadom.",
    },
    {
      title: "Pošli nám ich",
      text: "Nahraj videá napríklad na Disk Google, Dropbox alebo WeTransfer a odkazy vlož do formulára.",
    },
    {
      title: "Schválime = preukaz zadarmo",
      text: "Ak videá schválime, dostaneš preukaz ISIC, ITIC alebo EURO<26 na rok zadarmo.",
    },
  ];

  return (
    <section id="ako-to-funguje" className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Ako to funguje?</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-4xl font-black text-brand-teal">{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoIdeas() {
  const ideas = [
    { emoji: "🎬", text: "„3 veci, ktoré som zistil/a až po/na škole“" },
    { emoji: "💸", text: "„Koľko som ušetril/a s preukazom?“" },
    { emoji: "🛒", text: "„Toto som s preukazom vôbec nečakal/a“" },
    { emoji: "👥", text: "„Kam chodím s preukazom na zľavu“" },
    { emoji: "✈️", text: "„Ako využiť preukaz na cestovanie“" },
    { emoji: "💡", text: "Alebo tvoj vlastný nápad" },
  ];

  return (
    <section className="bg-brand-teal-light py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Čo môžeš natáčať?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Nemusíš byť influencer ani mať techniku. Chceme obsah, ktorý nepôsobí ako reklama.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <li
              key={idea.text}
              className="rounded-2xl border border-brand-teal/30 bg-card p-5 text-sm font-medium"
            >
              <span className="text-2xl" aria-hidden>
                {idea.emoji}
              </span>
              <p className="mt-3">{idea.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Eligibility() {
  return (
    <section id="podmienky" className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Ktorý preukaz môžeš získať?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Vo formulári zvoľ preukaz, o ktorý máš záujem – musíš na neho mať nárok. Zapojiť sa môžu
          noví aj existujúci držitelia.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {CARD_TYPES.map((card) => (
            <div
              key={card}
              className={`${CARD_META[card].accentClass} rounded-2xl border-2 border-card-accent bg-card p-6`}
            >
              <BrandMark card={card} />
              <p className="mt-4 font-display text-base font-bold">{CARD_META[card].tagline}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Nárok: {CARD_META[card].eligibility}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-brand-teal-light p-6">
          <p className="font-display text-base font-bold">Podmienky ambasádorského programu</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Nič sa nepodpisuje – podmienky (zmluvu o dielo a licenčnú zmluvu) prijmeš digitálne
            zaškrtnutím súhlasu vo formulári. Znamená to, že dodáš 3 videá podľa podmienok a po ich
            schválení dostaneš preukaz na rok zadarmo.
          </p>
          <a
            href={TERMS_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-brand-teal-dark underline underline-offset-4"
          >
            Prečítať podmienky programu (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    {
      q: "Musím mať veľa followerov?",
      a: "Nie. Nesleduje sa počet followerov ani skúsenosti s tvorbou obsahu.",
    },
    {
      q: "Ako pošlem videá?",
      a: "Nahraj ich na Disk Google, Dropbox, WeTransfer alebo iné úložisko a do formulára vlož odkazy na všetky 3 videá.",
    },
    {
      q: "Čo ak video neschválite?",
      a: "Dáme ti spätnú väzbu a video môžeš upraviť alebo natočiť nanovo.",
    },
    {
      q: "Kde sa moje videá objavia?",
      a: "Schválené videá môžeme použiť v komunikácii ISIC / ITIC / EURO<26 – najmä na sociálnych sieťach, webe a v online kampaniach.",
    },
    {
      q: "Musím už mať preukaz?",
      a: "Nie. Stačí, že máš na zvolený preukaz nárok a potvrdíš to vo formulári.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-teal-light py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Časté otázky</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left font-display font-bold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-teal-dark py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandMarkRow onLight={false} />
          <p className="mt-4 max-w-md text-xs text-primary-foreground/70">
            Program organizuje združenie CKM SYTS, výhradný zástupca preukazov &nbsp;ISIC, ITIC a EURO&lt;26 na Slovensku.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
          <a href="#ako-to-funguje" className="hover:text-brand-teal">
            Ako to funguje
          </a>
          <a href="#podmienky" className="hover:text-brand-teal">
            Preukazy
          </a>
          <a href="#faq" className="hover:text-brand-teal">
            Časté otázky
          </a>
          <a href="#formular" className="hover:text-brand-teal">
            Poslať videá
          </a>
        </nav>
      </div>
    </footer>
  );
}
