# Prompt pre buildera – SVG logá ISIC / ITIC / European Youth Card

Skopíruj celý text nižšie a prilož k nemu tri SVG súbory (isic-logo.svg, itic-logo.svg, eyc-logo.svg):

```text
Mám tri SVG logá: ISIC, ITIC a European Youth Card (EURO<26). Použi ich na stránke VŽDY takto a všade rovnako:

1. KOMPONENT BrandMark
- Vytvor znovupoužiteľný komponent, ktorý vykreslí logo cez <img> (nie inline SVG).
- Každé logo má PEVNÝ rámik: výška 64 px, šírka 112 px (Tailwind: h-16 w-28).
- Obrázok v rámiku: object-contain – nikdy nedeformovať pomer strán.
- Vnútorný padding loga: 8 px zo všetkých strán (p-2), okrem European Youth Card, ktoré má horizontálny padding 0 a vertikálny 8 px (px-0 py-2), aby bolo opticky rovnako veľké ako ISIC/ITIC.
- Žiadne tiene, žiadne obrysy, žiadne zaoblenie na samotnom logu.

2. PORADIE – všade na stránke striktne: ISIC → ITIC → European Youth Card.

3. VZHĽAD RÁMIKOV / KARIET okolo log (ak sú logá v kartách):
- Zaoblenie rohov: 16 px (rounded-lg, radius 1rem).
- Obrys karty: 2 px plná čiara v tmavej farbe textu #143333 (border-2 border-foreground).
- Pozadie karty: biele #FFFFFF.
- Tieň: iba tvrdý offsetový tieň 8 px vpravo a 8 px dole, bez rozmazania, farba teal #40B8B8 (shadow-[8px_8px_0_#40B8B8]). Žiadne blur/glow tiene.
- Ak je logo na tmavom pozadí (napr. pätička), daj mu biely podklad: rounded-md (6 px) s bg-white/95.

4. FARBY, ktoré sa smú pri logách objaviť: teal #40B8B8 a #006666 (ISIC), oranžová #FF7314 (ITIC), ružová #EC0578 a žltá #FFC805 (EYCA/EURO<26). Žiadna modrá, žiadne gradienty.

5. ALT texty: "ISIC – International Student Identity Card", "ITIC – International Teacher Identity Card", "EURO<26 / European Youth Card". Načítavanie lazy (loading="lazy").

6. Riadok log zobraz cez flex s medzerou 16 px (gap-4), zalamovanie flex-wrap, zarovnané na stred vertikálne (items-center).
```

## Technická poznámka
- Kľúčové hodnoty na kontrolu po vygenerovaní: rámik 112 × 64 px, radius 16 px, border 2 px #143333, tieň 8 px/8 px #40B8B8, padding 8 px (EYC: 0 h / 8 px v), poradie ISIC → ITIC → EYC.
