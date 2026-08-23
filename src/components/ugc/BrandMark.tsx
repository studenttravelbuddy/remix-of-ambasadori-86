import { CARD_META, CARD_TYPES, type CardType } from "@/lib/ambassador";
import { cn } from "@/lib/utils";

/**
 * Placeholder pre logá ISIC / ITIC / EURO<26.
 * Keď prídu oficiálne súbory, stačí sem vložiť <img src={...} /> namiesto textu.
 */
export function BrandMark({
  card,
  className,
}: {
  card: CardType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        CARD_META[card].accentClass,
        "inline-flex items-center rounded-md border-2 border-card-accent-strong px-2.5 py-1 font-display text-sm font-bold tracking-tight text-card-accent-strong",
        className,
      )}
    >
      {CARD_META[card].label}
    </span>
  );
}

export function BrandMarkRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {CARD_TYPES.map((card) => (
        <BrandMark key={card} card={card} />
      ))}
    </div>
  );
}
