import eycLogo from "@/assets/eyc-logo.svg.asset.json";
import isicLogo from "@/assets/isic-logo.svg.asset.json";
import iticLogo from "@/assets/itic-logo.svg.asset.json";
import { CARD_META, CARD_TYPES, type CardType } from "@/lib/ambassador";
import { cn } from "@/lib/utils";

const LOGOS: Record<CardType, { url: string; alt: string; inner: string }> = {
  isic: {
    url: isicLogo.url,
    alt: "ISIC – International Student Identity Card",
    inner: "p-2",
  },
  itic: {
    url: iticLogo.url,
    alt: "ITIC – International Teacher Identity Card",
    inner: "p-2",
  },

  euro26: {
    url: eycLogo.url,
    alt: "EURO<26 / European Youth Card",
    inner: "p-2",
  },
};

export function BrandMark({
  card,
  className,
  onLight = true,
}: {
  card: CardType;
  className?: string;
  onLight?: boolean;
}) {
  const logo = LOGOS[card];
  return (
    <img
      src={logo.url}
      alt={logo.alt}
      loading="lazy"
      className={cn(
        "h-10 w-[4.5rem] shrink-0 object-contain sm:h-16 sm:w-28",
        logo.inner,
        !onLight && "rounded-md bg-white/95",
        className,
      )}
    />
  );
}


export function BrandMarkRow({
  className,
  onLight = true,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <div className={cn("flex flex-nowrap items-center gap-2 sm:gap-4", className)}>
      {CARD_TYPES.map((card) => (
        <BrandMark key={card} card={card} onLight={onLight} />
      ))}
    </div>
  );
}

export function CardLabel({ card }: { card: CardType }) {
  return <span className="font-display font-bold">{CARD_META[card].label}</span>;
}
