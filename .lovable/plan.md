# Zadanie identity (design systém) ako .md súbor

Vytvorím dokument `docs/brand-identity.md` v projekte (a rovnakú kópiu na stiahnutie v `/mnt/documents/brand-identity.md`), ktorý presne zadefinuje vizuálnu identitu použitú na aktuálnej stránke, aby ju vedela ďalšia stránka prevziať 1:1.

## Čo bude v dokumente

**1. Farebná paleta (presné HEX + kde sa používa)**
- ISIC teal `#40B8B8` – hlavný akcent, tlačidlá, línia cesty
- ISIC dark teal `#006666` – primárna farba, nadpisy CTA, footer
- EYCA žltá `#FFC805` – zvýraznenia, dekoratívne kruhy, čísla
- EYCA ružová `#EC0578` – akcent EURO<26, nadpisy sekcií
- ITIC oranžová `#FF7314` – akcent ITIC
- Neutrály: biela `#FFFFFF`, text `#143333`, sivá `#6E6E6E`, svetlá teal `#E8F5F5`, `#F2F9F9`, border `#D5E9E9`
- Pravidlo: žiadna modrá, žiadne gradienty, max. 4–5 farieb na obrazovku

**2. Typografia**
- Nadpisy: Roboto Slab (`font-display`), váha 900, tesný leading
- Text: Roboto, váhy 400/700
- Škála nadpisov (h1 5xl→8xl, h2 4xl→5xl, h3 xl→3xl), uppercase eyebrow `text-sm font-black tracking-wider`

**3. Elementy a komponenty** – presné triedy a vzory zo stránky
- Karty: `rounded-lg border-2 border-foreground bg-card p-6`
- Hard shadow: `shadow-[8px_8px_0_var(--brand-teal)]` (žiadne rozmazané tiene)
- Číselné odznaky: `size-12 rounded-full border-2 border-foreground` s farbou karty
- Tlačidlá: plné, `h-12 px-7 font-bold shadow-none`, hover prehodí farbu
- Linky: `underline decoration-brand-pink decoration-2 underline-offset-4`
- Dekoratívne kruhy: `rounded-full border-[28px] border-brand-yellow`
- Placeholdery/bannery: `border-2 border-dashed border-foreground`
- Accordion FAQ, formulárové polia s teal borderom
- Animovaná esovitá čiara: prerušovaná SVG dráha, `stroke-dashoffset` loop 1.2s, vypnutá pri `prefers-reduced-motion`

**4. Tokeny a utility na skopírovanie**
- CSS premenné `--brand-*` a `@theme inline` mapovanie
- Per-card utility `card-isic` / `card-itic` / `card-euro26` (`--card-accent`)
- Kontext `.ambassador-playful` (prepis primary/border/ring na teal)
- Radius `--radius: 1rem`

**5. Logá**
- ISIC, ITIC, EURO<26/EYCA v rovnako veľkých rámoch `h-16 w-28`, `object-contain`, bez tieňov a deformácií, dostatočný ochranný priestor

**6. Pravidlá pre novú stránku**
- Do-list a don't-list (žiadne fialové/modré akcenty, žiadne blur tiene, žiadne iné fonty)

## Technické
Súbor je čisto dokumentačný – žiadne zmeny v kóde, štýloch ani v databáze.
