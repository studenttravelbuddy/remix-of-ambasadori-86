# Zmena poradia preukazov na ISIC → ITIC → EURO<26

## Cieľ
Všade na stránke (logá, sekcie s nárokom, výber vo formulári) musí byť poradie: **ISIC, ITIC, European Youth Card (EURO<26)**. Aktuálne sa ako prvá zobrazuje EURO<26.

## Príčina
Poradie určuje konštanta `CARD_TYPES` v `src/lib/ambassador.ts`, ktorá je teraz `["euro26", "isic", "itic"]`. Všetky komponenty (riadok log, kartičky s nárokom, výber preukazu vo formulári) toto pole len prechádzajú v cykle – stačí zmena na jednom mieste.

## Zmeny
1. **`src/lib/ambassador.ts`**
   - `CARD_TYPES` zmeniť na `["isic", "itic", "euro26"]`
   - záznamy v `CARD_META` preusporiadať na isic → itic → euro26 (len prehľadnosť v kóde, bez zmeny textov)
2. **Overenie** – build + vizuálna kontrola poradia v hero logách, v sekcii nárokov, vo výbere kariet vo formulári a v pätičke.

## Technické detaily
- Žiadna zmena textov, farieb ani funkcionality; čisté preusporiadanie.
- Logika formulára (overenie veku pre EURO<26 atď.) ostáva nedotknutá – poradie polí vo forme sa tiež zmení automaticky, lebo sa generuje z `CARD_TYPES`.
