# Hravá verzia ambasádorskej landing page

Vytvorím samostatnú verejnú podstránku na adrese `/ambasador`, ktorá zachová celý obsah, pravidlá a funkčný formulár súčasnej stránky, ale dostane vybraný vizuálny smer **Playful curvilinear flow**.

## Vizuálny koncept podľa brand manuálov

Celý hravý variant postavím striktne na pravidlách brand manuálov ISIC, ITIC a EYC/EURO<26:

- **Farby**: iba oficiálne hodnoty – ISIC teal `#40B8B8` a dark teal `#006666`, ITIC modrá `#008CDC`, EURO<26 oranžová `#FF7314` a ružová `#EC0578`, doplnková žltá `#FFC805`, biela a tmavý text. Každý preukaz si drží svoju vlastnú farbu, farby sa nemiešajú do gradientov.
- **Typografia**: Roboto pre text a Roboto Slab pre nadpisy, presne ako v manuáli; veľkostné a hrúbkové kontrasty namiesto cudzích fontov.
- **Logá**: oficiálne dodané logá bez deformácie, s dostatočným ochranným priestorom, na bielej alebo tmavej teal ploche s garantovaným kontrastom; logo sa nepoužije ako dekorácia ani vo vnútri grafických tvarov.
- **Grafické prvky z manuálov**: zaoblené tvary odvodené z geometrie preukazu, plné farebné plochy, pásiky a šípky – teda prvky, ktoré manuály pripúšťajú. Žiadne rozmazané orby, tiene na logách ani generické AI gradienty.
- Hero bude pôsobiť ako výrazná mladá kampaň: dominantné „3 videá“, oficiálne logá, jasný prísľub a CTA na formulár.
- Hlavným grafickým motívom bude veľká **esovitá cesta** v brandovej žltej/teal, ktorá spojí tri zastávky: „Natoč 3 videá“, „Pošli nám ich“ a „Schválime = preukaz zadarmo“.


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
