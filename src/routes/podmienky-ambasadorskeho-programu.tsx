import { Link, createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { BrandMarkRow } from "@/components/ugc/BrandMark";
import { Button } from "@/components/ui/button";
import { TERMS_PDF_DOWNLOAD_URL } from "@/lib/ambassador-assets";
import { TERMS_FOOTER, TERMS_INTRO, TERMS_SECTIONS, TERMS_SUBTITLE, TERMS_TITLE } from "@/lib/ambassador-terms";

const title = "Podmienky ambasádorského programu";
const description =
  "Podmienky programu ISIC, ITIC a EURO<26: dodanie troch videí, digitálny súhlas a preukaz na rok zadarmo po schválení.";

export const Route = createFileRoute("/podmienky-ambasadorskeho-programu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="bg-background">
      <header className="bg-brand-teal-dark text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:py-12">
          <BrandMarkRow onLight={false} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand-teal">
            Digitálne prijímané podmienky
          </p>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-balance-tight sm:text-5xl">
            {TERMS_TITLE}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-primary-foreground/85 sm:text-lg">
            {TERMS_SUBTITLE}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-brand-teal text-brand-teal-dark hover:bg-brand-teal/90">
              <a href={TERMS_PDF_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Download aria-hidden />
                Stiahnuť PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/">Späť na formulár</Link>
            </Button>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <section className="space-y-4 rounded-2xl border border-border bg-brand-teal-light p-6">
          {TERMS_INTRO.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <div className="mt-10 space-y-10">
          {TERMS_SECTIONS.map((section) => (
            <section key={section.heading} className="border-t border-border pt-8">
              <h2 className="font-display text-2xl font-black text-brand-teal-dark">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    <span className="font-semibold text-foreground">{index + 1}. </span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 rounded-2xl bg-brand-teal-dark p-6 text-sm leading-7 text-primary-foreground/85">
          {TERMS_FOOTER}
        </footer>
      </article>
    </main>
  );
}