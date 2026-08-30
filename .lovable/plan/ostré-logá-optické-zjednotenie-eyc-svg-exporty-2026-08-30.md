# Ostré logá + optické zjednotenie EYC + SVG exporty

## Čo sa zmení

1. **Ostré rozlíšenie na webe** — namiesto dnešných PNG log sa použijú tri nové vektorové (SVG) logá, ktoré si dodala. Vektor je ostrý na akomkoľvek displeji (retina, zoom, tlač).

2. **European Youth Card bude opticky rovnako veľké ako ISIC a ITIC** — EYC logo má iný pomer strán (2:1) než ISIC/ITIC (2,5:1), preto dnes vyzerá menšie. Každému logu sa nastaví vlastný optický koeficient veľkosti, aby výška textu aj ikonka boli približne rovnaké vo všetkých troch rámikoch. Rámiky zostanú jednotné 112 × 64 px.

3. **SVG exporty** — pripravím tri samostatné SVG súbory, každé logo v bielom rámiku s presnými okrajmi (112 × 64 px, rovnaký clear space ako na webe), po jednom, nič iné v súbore. Dostaneš ich ako súbory na stiahnutie.

## Technická časť

- Nové logá sa pripoja cez `lovable-assets` pointery: `src/assets/isic-logo.svg.asset.json`, `itic-logo.svg.asset.json`, `eyc-logo.svg.asset.json` (staré PNG pointery zostanú nepoužité alebo sa odstránia).
- `src/components/ugc/BrandMark.tsx`: `LOGOS` mapa dostane per-card `scale` (napr. ISIC/ITIC 1, EYC ~1,25) aplikovaný cez `max-h`/`max-w` triedy vo vnútri nezmeneného rámika `h-16 w-28`. Žiadna zmena poradia (ISIC → ITIC → EYC), farieb ani formulára.
- Exporty: skript vygeneruje tri SVG s bielym `rect` 112 × 64 a vloženým logom zarovnaným na stred s `preserveAspectRatio`, presne podľa rámikov v pätičke; overím rozmery a vizuálny render.

## Bez zmeny

Rozloženie stránky, texty, S-krivka, FAQ, podmienky, formulár aj backend zostávajú nedotknuté.
