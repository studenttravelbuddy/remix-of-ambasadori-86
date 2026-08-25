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

export function Hero({ remaining }: { remaining: number | null }) {
  return (
    <header className="relative overflow-hidden bg-brand-teal-deep text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-teal/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:py-24 lg:flex-row lg:items-center">
        <div className="lg:w-3/5">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-teal/50 bg-brand-teal/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            Ambasádorský program
            {remaining !== null && <span className="text-brand-yellow">zostáva {remaining} miest</span>}
          </p>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-balance-tight sm:text-6xl">
            3 videá = <span className="text-brand-yellow">ISIC, ITIC alebo EURO&lt;26</span> na rok
            zadarmo
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Tvor obsah, ktorý baví mladých, a preukaz ti zaplatíme my. Staň sa naším ambasádorom.
          </p>
          <p className="mt-3 max-w-xl text-base text-primary-foreground/70">
            Jednoduché. Ty tvoríš. My odmeňujeme.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-brand-yellow text-brand-teal-deep hover:bg-brand-yellow/90"
            >
              Chcem sa zapojiť
            </Button>
            <a
              href="#ako-to-funguje"
              className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Ako to funguje
            </a>
          </div>
          <BrandMarkRow className="mt-10" onLight={false} />
        </div>

        <div className="lg:w-2/5">
          <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
            <p className="font-display text-lg font-bold">Máš preukaz a baví ťa tvoriť videá?</p>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Zapoj sa do ambasádorského programu a vytvor pre nás 3 krátke UGC videá. Ak ich
              schválime a splníš podmienky programu, získaš od nás kupón do nášho e-shopu v hodnote
              ceny členského poplatku a členskej karty na 1 rok.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Stačí mobil, žiadna profesionálna technika",
                "3 krátke videá, približne 15–30 sekúnd",
                "Nemusíš byť influencer",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  <span className="text-primary-foreground/85">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </header>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Prihlás sa do programu",
      text: "Vyplň registračný formulár a povedz nám o sebe. Prihlášky vyhodnotíme a vybraných záujemcov kontaktujeme – odoslanie formulára automaticky neznamená prijatie do programu.",
    },
    {
      title: "Dohodneme sa na zadaní",
      text: "Po zaradení do programu podpíšeš Zmluvu o dielo a dostaneš konkrétne zadanie – tému, požadované prvky a základné technické požiadavky.",
    },
    {
      title: "Natoč 3 krátke videá",
      text: "Videá približne 15–30 sekúnd, pokojne na mobil. Nemusia vyzerať ako reklama – práve naopak, chceme autentický obsah zo života mladých.",
    },
    {
      title: "Schválime ich a máš preukaz",
      text: "Po odovzdaní a schválení všetkých 3 videí ti poskytneme kupón do nášho e-shopu v hodnote ceny členského poplatku a členskej karty na 1 rok.",
    },
  ];


  return (
    <section id="ako-to-funguje" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Ako to funguje?</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="font-display text-4xl font-black text-brand-teal">
                {index + 1}
              </span>
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
    { emoji: "🎬", text: "„3 veci, ktoré som zistil/a až po škole“" },
    { emoji: "💸", text: "„Koľko som ušetril/a s preukazom?“" },
    { emoji: "🛒", text: "„Toto som s preukazom vôbec nečakal/a“" },
    { emoji: "🍔", text: "„Kam chodím s preukazom na zľavu“" },
    { emoji: "✈️", text: "„Ako využiť preukaz na cestovanie“" },
    { emoji: "😂", text: "Vtipná situácia zo života mladého človeka" },
    { emoji: "📱", text: "Reakcia alebo krátky trend s prirodzeným zapojením preukazu" },
    { emoji: "💡", text: "Pokojne príď aj s vlastným nápadom!" },
  ];

  return (
    <section className="bg-brand-teal-light py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Čo môžeš natáčať?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Nemusíš vymýšľať nič komplikované. Chceme videá, ktoré by si si pozrel/a aj ty sám/sama.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

export function NoInfluencerNeeded() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black sm:text-4xl">
            Nemusíš byť influencer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toto nie je súťaž o počet followerov. Nemusíš mať 10 000 sledovateľov, profesionálnu
            kameru ani skúsenosti s reklamou. Chceme obsah, ktorý nepôsobí ako reklama.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Prirodzenosť", text: "Vieš byť sám/sama sebou pred kamerou." },
            { title: "Nápady", text: "Máš vlastný pohľad a vieš zaujať." },
            { title: "Chuť tvoriť", text: "Baví ťa robiť krátke videá." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-2 border-brand-yellow/70 bg-brand-yellow/10 p-5"
            >
              <h3 className="font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Rewards() {
  return (
    <section className="bg-brand-teal-deep py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Čo za to dostaneš?</h2>
        <div className="mt-8 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
          <p className="font-display text-2xl font-bold">
            🎟️ Preukaz na ďalší rok zadarmo
          </p>
          <p className="mt-3 max-w-3xl text-primary-foreground/80">
            Za 3 schválené UGC videá ti poskytneme kupón do nášho eshopu v hodnote ceny členského
            poplatku a členskej karty ISIC / ITIC / EURO&lt;26 na 1 rok podľa platných podmienok
            programu.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Tvoje videá použijeme na našich sociálnych sieťach",
            "Získaš skúsenosť s tvorbou obsahu pre reálnu značku",
            "Tvoje videá sa môžu dostať k tisícom mladých ľudí",
            "Spoluprácu si môžeš dať do portfólia",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-primary-foreground/15 p-5 text-sm text-primary-foreground/85"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-brand-yellow/95 p-6 text-brand-teal-deep">
          <p className="font-display text-xl font-black">Koľko videí treba? 3 videá.</p>
          <p className="mt-2 text-sm font-medium">
            Nie 30. Nie každý týždeň. Nie donekonečna. 😎 Vytvoríš tri dohodnuté videá, my ich
            schválime a podmienky programu sú splnené.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Eligibility() {
  return (
    <section id="podmienky" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black sm:text-4xl">Kto sa môže zapojiť?</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Program je určený pre držiteľov (aj budúcich držiteľov) preukazov ISIC, ITIC a
          EURO&lt;26, ktorí spĺňajú podmienky nároku na zvolený preukaz, chcú vytvárať krátky video
          obsah, dokážu odovzdať 3 UGC videá podľa zadania a súhlasia s podmienkami použitia
          vytvoreného obsahu.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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

        <div className="mt-10 rounded-2xl border border-border bg-secondary p-6">
          <h3 className="font-display text-lg font-bold">Čo znamená „schválené video“?</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li>• spĺňa dohodnuté zadanie a dĺžku 30–40 sekúnd,</li>
            <li>• má technicky použiteľný obraz a zvuk,</li>
            <li>• je autentické a originálne (bez cudzieho obsahu),</li>
            <li>• je vhodné na komunikáciu ISIC / ITIC / EURO&lt;26,</li>
            <li>• a môžeme ho použiť na dohodnuté účely.</li>
          </ul>
        </div>

        <p className="mt-6 text-sm font-semibold text-brand-teal-dark">
          Počet miest v programe je obmedzený. O zaradení rozhoduje náš tím podľa aktuálnych
          kapacít a splnenia podmienok.
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    {
      q: "Musím mať veľa followerov?",
      a: "Nie. Program nie je postavený na počte followerov. Hľadáme najmä ľudí, ktorí dokážu vytvoriť prirodzený a zaujímavý video obsah.",
    },
    {
      q: "Musím mať skúsenosti s UGC?",
      a: "Nie. Ak si ešte UGC video netvoril/a, nevadí. Zadanie a základné požiadavky dostaneš od nás.",
    },
    {
      q: "Čo ak moje video neschválite?",
      a: "Dáme ti spätnú väzbu a podľa podmienok programu bude možné video upraviť alebo natočiť nanovo.",
    },
    {
      q: "Kde sa moje videá môžu objaviť?",
      a: "Podľa dohody môžeme schválené videá využiť v komunikácii ISIC / ITIC / EURO<26, napríklad na sociálnych sieťach, webových stránkach alebo v online kampaniach. Konkrétne podmienky použitia obsahu sú súčasťou platných podmienok programu.",
    },
    {
      q: "Koľko ľudí sa môže zapojiť?",
      a: "Program má obmedzenú kapacitu, ročne prijímame približne 100–200 ambasádorov. Aktuálny počet dostupných miest je uvedený pri formulári.",
    },
    {
      q: "Dostanem kartu okamžite?",
      a: "Karta zdarma je odmenou za splnenie podmienok programu, teda za 3 nami schválené videá. Po splnení podmienok ti poskytneme kupón do nášho eshopu.",
    },
    {
      q: "Musím už mať preukaz?",
      a: "Nie. Zapojiť sa môžu existujúci držitelia aj tí, ktorí preukaz ešte nemajú – vo formulári len uveď, o ktorý preukaz máš záujem a potvrď, že naň máš nárok.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-teal-light py-20">
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
    <footer className="bg-brand-teal-deep py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandMarkRow onLight={false} />
          <p className="mt-4 max-w-md text-xs text-primary-foreground/70">
            Počet účastníkov programu je obmedzený. O zaradení do programu rozhoduje náš tím podľa
            aktuálnych kapacít a splnenia podmienok programu.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
          <a href="#ako-to-funguje" className="hover:text-brand-yellow">
            Ako to funguje
          </a>
          <a href="#podmienky" className="hover:text-brand-yellow">
            Podmienky programu
          </a>
          <a href="#faq" className="hover:text-brand-yellow">
            Časté otázky
          </a>
          <a href="#formular" className="hover:text-brand-yellow">
            Prihláška
          </a>
        </nav>
      </div>
    </footer>
  );
}
