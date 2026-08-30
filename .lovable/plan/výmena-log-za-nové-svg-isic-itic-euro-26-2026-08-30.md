# Výmena log za nové SVG (ISIC → ITIC → EURO<26)

## Čo sa zmení

- Nahradím všetky tri logá na stránke novými dodanými SVG súbormi:
  - `isic-logo.svg` (ISIC)
  - `itic-logo.svg` (ITIC)
  - `EYCA_EURO26_RGB.svg` (EURO<26 / European Youth Card)
- Použijú sa všade, kde sa dnes logá zobrazujú: hero riadok log, sekcie preukazov, výber preukazu vo formulári a pätička.
- Poradie zostane striktne ISIC → ITIC → EURO<26 (riadené jednou konštantou, takže platí na celej stránke).
- Rámiky zostanú jednotné 112 × 64 px, `object-contain`, bez deformácie, bez tieňov a obrysov na logách.
- EURO<26 dostane vlastný optický padding (bez horizontálneho), aby text aj ikonka pôsobili rovnako veľké ako pri ISIC/ITIC.

## Technická časť

- Nové SVG nahrám cez `lovable-assets` z `/mnt/user-uploads/` a prepíšem pointery `src/assets/isic-logo.svg.asset.json`, `itic-logo.svg.asset.json`, `eyc-logo.svg.asset.json`.
- Z Inkscape SVG odstránim `inkscape:`/`sodipodi:` atribúty (spôsobovali problém pri rendrovaní mimo prehliadača).
- `src/components/ugc/BrandMark.tsx` bude ukazovať na nové pointery; štruktúra komponentu a triedy zostanú.
- Poradie: `CARD_TYPES` v `src/lib/ambassador.ts` už je `["isic","itic","euro26"]` – overím, že sa nemení.
- Overenie: build + vizuálna kontrola hero, sekcií, formulára a pätičky na desktope aj mobile.

## Bez zmeny

Texty, farby, rozloženie, formulár, FAQ, podmienky ani backend sa nemenia.
