import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { ApplicationForm } from "@/components/ugc/ApplicationForm";
import {
  Eligibility,
  Faq,
  Hero,
  HowItWorks,
  NoInfluencerNeeded,
  Rewards,
  SiteFooter,
  VideoIdeas,
} from "@/components/ugc/Sections";
import { getRemainingSpots } from "@/lib/ambassador.functions";

const title = "Ambasádorský program ISIC, ITIC a EURO<26 – 3 videá, preukaz zadarmo";
const description =
  "Staň sa ambasádorom ISIC, ITIC alebo EURO<26. Natoč 3 krátke UGC videá a získaj preukaz na rok zadarmo. Prihlás sa online, počet miest je obmedzený.";

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
  const fetchSpots = useServerFn(getRemainingSpots);
  const { data } = useQuery({
    queryKey: ["remaining-spots"],
    queryFn: () => fetchSpots(),
  });

  return (
    <main>
      <Hero remaining={data?.remaining ?? null} />
      <HowItWorks />
      <VideoIdeas />
      <NoInfluencerNeeded />
      <Rewards />
      <Eligibility />
      <Faq />
      <ApplicationForm />
      <SiteFooter />
    </main>
  );
}
