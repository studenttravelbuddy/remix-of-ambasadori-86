import { createFileRoute } from "@tanstack/react-router";

import { ApplicationForm } from "@/components/ugc/ApplicationForm";
import {
  Eligibility,
  Faq,
  Hero,
  HowItWorks,
  SiteFooter,
  VideoIdeas,
} from "@/components/ugc/Sections";

const title = "3 videá = ISIC, ITIC alebo EURO<26 na rok zadarmo";
const description =
  "Natoč 3 krátke videá na mobil, pošli nám ich a keď ich schválime, získaš preukaz ISIC, ITIC alebo EURO<26 na rok zadarmo. Bez výberového konania.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <VideoIdeas />
      <Eligibility />
      <Faq />
      <ApplicationForm />
      <SiteFooter />
    </main>
  );
}

