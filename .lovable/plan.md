# Hravá verzia ambasádorskej landing page

Vytvorím samostatnú verejnú podstránku na adrese `/ambasador`, ktorá zachová celý obsah, pravidlá a funkčný formulár súčasnej stránky, ale dostane vybraný vizuálny smer **Playful curvilinear flow**.

## Vizuálny koncept

- Hero bude pôsobiť ako výrazná mladá kampaň: dominantné „3 videá“, oficiálne logá ISIC, ITIC a EURO<26, jasný prísľub a CTA na formulár.
- Hlavným grafickým motívom bude veľká **esovitá cesta**, ktorá spojí tri zastávky: „Natoč 3 videá“, „Pošli nám ich“ a „Schválime = preukaz zadarmo“.
- Použijem výhradne existujúce brand farby: ISIC teal, ITIC oranžovú, EURO<26 ružovú a doplnkovú žltú, doplnené bielymi plochami a tmavým textom pre kontrast.
- Hravosť vytvoria zakrivené línie, smerové šípky, kruhy, pásiky a jemne natočené prvky odvodené od geometrie preukazov; bez rozmazaných orbov a generických gradientov.
- Zachovám Roboto a Roboto Slab z brand systému, aby variant ostal jasne súčasťou rovnakých značiek.

## Obsah a funkcionalita

- Nová route bude obsahovým duplikátom aktuálnej landing page: hero, proces, nápady na videá, nárok na jednotlivé preukazy, podmienky, FAQ, formulár a footer.
- Formulár bude používať rovnakú validáciu, nárokové pravidlá a odosielanie do existujúcej databázy; meniť sa bude iba jeho vizuálne zasadenie.
- Všetky odkazy na podmienky zostanú funkčné a povedú na existujúcu čitateľnú podstránku podmienok.
- CTA tlačidlá budú rolovať k formuláru priamo na novej podstránke.

## Responzivita a pohyb

- Na desktope bude esovitá línia viesť medzi striedavo umiestnenými krokmi; na mobile sa zmení na zjednodušenú vertikálnu vlnu, aby text a ovládanie zostali pohodlné.
- Pridám jemné kreslenie trasy pri načítaní/scrollovaní a malé hover pohyby dekorácií; pri `prefers-reduced-motion` budú animácie vypnuté.
- Skontrolujem, že logá, nadpisy, karty a formulár sa neprekrývajú na mobilnom ani desktopovom rozmere.

## Technické riešenie

- Vytvorím nový route súbor pre `/ambasador` s vlastným SEO titulkom, popisom, Open Graph a Twitter metadátami.
- Nové hravé sekcie oddelím do samostatného komponentu, aby pôvodná `/` stránka zostala nezmenená a oba varianty sa dali porovnávať.
- Zdieľaný `ApplicationForm` rozšírim iba o voliteľný vizuálny variant; dátová schéma a serverová logika sa nemenia.
- Prípadné nové farby, tiene a animačné hodnoty pridám ako semantické tokeny do globálneho dizajnového systému.

## Overenie

- Overím zostavenie aplikácie a runtime bez chýb.
- V prehliadači skontrolujem desktop aj mobil, esovitú cestu, CTA scroll, výber všetkých troch preukazov, dynamické nárokové polia, FAQ a odkazy na podmienky.
- Formulár nebudem pri vizuálnom teste odosielať s falošnou prihláškou do produkčných dát.
