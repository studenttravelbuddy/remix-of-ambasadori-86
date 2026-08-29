import { createFileRoute } from "@tanstack/react-router";

import { PlayfulAmbassadorPage } from "@/components/ugc/PlayfulAmbassadorPage";

const title = "Ambasádor ISIC, ITIC a EURO<26 | 3 videá";
const description =
  "Natoč 3 krátke videá, pošli nám ich a po schválení získaj ISIC, ITIC alebo EURO<26 na rok zadarmo. Ready for more?";

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
  component: PlayfulAmbassadorPage,
});

