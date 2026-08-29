# Vizuálna identita – ISIC / ITIC / EURO<26 ambasádorská stránka

Zadanie pre ďalšie stránky. Cieľ: nová stránka musí vyzerať ako súčasť tej istej rodiny – rovnaké farby, fonty, tvary a správanie prvkov.

---

## 1. Farebná paleta

Presné HEX hodnoty (žiadne iné farby sa nepoužívajú).

| Názov | HEX | Token | Použitie |
|---|---|---|---|
| ISIC teal | `#40B8B8` | `--brand-teal` | hlavný akcent, tlačidlá, esovitá línia, bordery |
| ISIC dark teal | `#006666` | `--brand-teal-dark` / `--brand-teal-deep` | primárna farba, CTA nadpisy, footer |
| ISIC light teal | `#E8F5F5` | `--brand-teal-light` | jemné pozadia sekcií, formulár |
| EYCA žltá | `#FFC805` | `--brand-yellow` | zvýraznenia, dekoratívne kruhy, číselné odznaky |
| EYCA ružová | `#EC0578` | `--brand-pink` | akcent EURO<26, eyebrow nadpisy, podčiarknutia |
| ITIC oranžová | `#FF7314` | `--brand-orange` | akcent ITIC |
| Sivá | `#6E6E6E` | `--brand-gray` | sekundárny text |

Neutrály a systémové tokeny:

| Rola | HEX |
|---|---|
| `--background` / `--card` | `#FFFFFF` |
| `--foreground` (text) | `#143333` |
| `--secondary` | `#E8F5F5` |
| `--muted` | `#F2F9F9` |
| `--muted-foreground` | `#587373` |
| `--border` | `#D5E9E9` |
| `--input` | `#C7E0E0` |
| `--ring` | `#40B8B8` |

Doplnkové tmavé varianty len pre kontrastné detaily kariet: `--brand-orange-dark: #8C2F0D`, `--brand-pink-dark: #A80355`.

**Pravidlá:**
- Žiadna modrá (`#008CDC` a podobné) – bola odstránená zámerne.
- Žiadne gradienty, žiadne fialové/indigo tóny.
- Max. 4–5 farieb na jednu obrazovku; teal je nosná, ostatné sú akcenty.

---

## 2. Typografia

- **Nadpisy:** `Roboto Slab` – trieda `font-display`, váha `font-black` (900), tesný leading (`leading-[0.98]` pre h1).
- **Text:** `Roboto`, váhy 400 a 700.
- **Škála:**
  - `h1`: `text-5xl sm:text-7xl lg:text-8xl`
  - `h2`: `text-4xl sm:text-5xl` (hero sekcie až `sm:text-6xl`)
  - `h3`: `text-xl sm:text-3xl`
  - eyebrow nad nadpisom: `text-sm font-black uppercase tracking-wider`
- Nadpisy zalamovať cez `text-balance-tight` (`text-wrap: balance`).

---

## 3. Elementy a komponenty

Presné vzory použité na stránke – kopírovať 1:1.

**Karta**
```html
<article class="rounded-lg border-2 border-foreground bg-card p-6 sm:p-8">
```

**Hard shadow (žiadne rozmazané tiene)**
```html
class="shadow-[8px_8px_0_var(--brand-teal)]"
```

**Číselný odznak kroku**
```html
<div class="flex size-12 items-center justify-center rounded-full border-2 border-foreground bg-brand-yellow">
```
Menší variant v zoznamoch: `size-9 rounded-full bg-brand-yellow font-display font-black`.

**Tlačidlá**
```html
<Button class="h-12 px-7 font-bold shadow-none bg-brand-yellow text-foreground hover:bg-brand-yellow/90" />
<Button class="h-12 px-7 font-bold shadow-none bg-brand-teal text-foreground hover:bg-brand-yellow" />
```
Plné výplne, bez tieňa, hover mení farbu pozadia (nie opacity blur).

**Textový link**
```html
class="text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
```

**Dekoratívny kruh (pozadie hero)**
```html
<div aria-hidden class="absolute -right-20 top-24 h-44 w-44 rounded-full border-[28px] border-brand-yellow sm:h-64 sm:w-64" />
```

**Deliaca linka pod logami**
```html
<div aria-hidden class="mx-auto h-1 w-24 rounded-full bg-brand-pink" />
```

**Placeholder / banner priestor**
```html
class="aspect-[16/7] min-h-48 rounded-lg border-2 border-dashed border-foreground bg-background p-8 text-center"
```

**FAQ** – shadcn `Accordion`, trigger `text-left font-display text-lg font-bold`.

**Formulár** – inputy s teal borderom cez kontext `.ambassador-playful`, radius `1rem`.

**Animovaná esovitá línia**
```css
@keyframes playful-route-flow {
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: -36; }
}
.playful-route path { animation: playful-route-flow 1.2s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .playful-route path { animation: none; }
}
```
Prerušovaná SVG dráha spája kroky procesu; na mobile ju nahrádza vertikálny žltý pás
`absolute bottom-16 left-7 top-8 w-2 rounded-full bg-brand-yellow lg:hidden`.

---

## 4. Tokeny na skopírovanie

```css
:root {
  --font-sans-stack: "Roboto", ui-sans-serif, system-ui, sans-serif;
  --font-display-stack: "Roboto Slab", ui-serif, Georgia, serif;

  --brand-teal: #40b8b8;
  --brand-teal-dark: #006666;
  --brand-teal-deep: #006666;
  --brand-teal-light: #e8f5f5;
  --brand-yellow: #ffc805;
  --brand-orange: #ff7314;
  --brand-orange-dark: #8c2f0d;
  --brand-pink: #ec0578;
  --brand-pink-dark: #a80355;
  --brand-gray: #6e6e6e;

  --background: #ffffff;
  --foreground: #143333;
  --card: #ffffff;
  --card-foreground: #143333;
  --primary: #006666;
  --primary-foreground: #ffffff;
  --secondary: #e8f5f5;
  --secondary-foreground: #006666;
  --muted: #f2f9f9;
  --muted-foreground: #587373;
  --accent: #40b8b8;
  --accent-foreground: #143333;
  --border: #d5e9e9;
  --input: #c7e0e0;
  --ring: #40b8b8;
  --radius: 1rem;
}

@theme inline {
  --font-sans: var(--font-sans-stack);
  --font-display: var(--font-display-stack);
  --color-brand-teal: var(--brand-teal);
  --color-brand-teal-dark: var(--brand-teal-dark);
  --color-brand-teal-light: var(--brand-teal-light);
  --color-brand-yellow: var(--brand-yellow);
  --color-brand-orange: var(--brand-orange);
  --color-brand-pink: var(--brand-pink);
  --color-brand-gray: var(--brand-gray);
  --color-card-accent: var(--card-accent);
  --color-card-accent-strong: var(--card-accent-strong);
}

/* akcent podľa preukazu – nastav na wrapper element karty */
@utility card-isic   { --card-accent: var(--brand-teal);   --card-accent-strong: var(--brand-teal-dark); }
@utility card-itic   { --card-accent: var(--brand-orange); --card-accent-strong: var(--brand-orange-dark); }
@utility card-euro26 { --card-accent: var(--brand-pink);   --card-accent-strong: var(--brand-pink-dark); }

/* hravý kontext stránky */
.ambassador-playful {
  --primary: var(--brand-teal);
  --secondary: var(--background);
  --secondary-foreground: var(--foreground);
  --muted: var(--background);
  --muted-foreground: var(--foreground);
  --border: var(--brand-teal);
  --input: var(--brand-teal);
  --ring: var(--brand-teal);
}
```

Karta preukazu potom používa `border-card-accent` a `text-card-accent` – farba sa dedí z utility.

---

## 5. Logá

- Oficiálne logá: **ISIC**, **ITIC**, **EURO<26 / European Youth Card**.
- Všetky v rovnako veľkých rámoch: `h-16 w-28` (112 × 64 px), `object-contain`, jednotný padding.
- Nikdy nedeformovať, neotáčať, nepridávať tiene ani obrysy.
- Dodržať ochranný priestor okolo loga a dostatočný kontrast (na bielom alebo svetlo teal pozadí).

---

## 6. Do / Don't

**Do**
- Ploché plochy, hrubé `border-2 border-foreground` obrysy, hard shadow offset 8px.
- Radius `rounded-lg` (1rem) alebo `rounded-full` pre odznaky a dekor.
- Veľké, tučné nadpisy v Roboto Slab.
- Jasná hierarchia: eyebrow → nadpis → krátky odstavec → CTA.
- Rešpektovať `prefers-reduced-motion`.

**Don't**
- Žiadna modrá, fialová ani iné neznačkové farby.
- Žiadne gradienty, blur tiene, glow efekty ani „orby“.
- Žiadne iné fonty (Inter, Poppins a pod.).
- Nemiešať viac ako 4–5 farieb na obrazovku.
- Nepoužívať tiene ani rámiky na logách.
