# Doplnenie FAQ: školský preukaz a kupón do e-shopu

Všetko ostatné na stránke ostáva tak, ako je. Pridáme len dve nové otázky do FAQ s vysvetlením, ako funguje odmena, keď už má účastník školský preukaz.

## Obsahové zmeny

1. **Pôvodná stránka** (`src/components/ugc/Sections.tsx`)
   - Do `faqs` pridať:
     - **Otázka:** „Čo ak už mám školský preukaz?“
     - **Odpoveď:** „Dostaneš kupón do e-shopu a môžeš kartu kupiť niekomu inému, kto má na ňu nárok, za tvoje videá.“
     - **Otázka:** „Ako môžem preukaz potom získať?“
     - **Odpoveď:** „Dostaneš kupón do e-shopu na www.objednaj-preukaz.sk, kde si preukaz ISIC, ITIC alebo EURO<26 kúpiš.“

2. **Hravá verzia homepage** (`src/components/ugc/PlayfulAmbassadorPage.tsx`)
   - Do `faqs` pridať rovnaké dve otázky a odpovede.

## Technické detaily

- Iba textové zmeny v existujúcich FAQ poliach.
- Žiadna zmena dizajnu, farieb, formulára ani databázy.
- Overenie: build + vizuálna kontrola, že FAQ správne zobrazuje nové otázky.
