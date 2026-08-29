# Odmena = kupón do e-shopu (prenosný, nie školský preukaz)

Na homepage (`/`, hravá verzia) a vo formulári jasne vysvetlíme, ako funguje odmena:

**Kľúčová správa:** Po schválení 3 videí nedostane účastník priamo preukaz, ale **kupón do e-shopu v hodnote preukazu ISIC / ITIC / EURO<26 na 1 rok**. Kupón je **prenosný** – ak má už preukaz zo školy (škola mu ho vydala), školské preukazy sa týmto spôsobom vydať nedajú, ale kupón môže použiť na nákup preukazu **pre niekoho iného** (kamarát, súrodenec…).

## Kde sa zmení obsah

1. **Hero** (`PlayfulAmbassadorPage.tsx`)
   - Podnadpis doplníme o vetu: odmena je kupón do e-shopu v hodnote preukazu – a ak už máš preukaz zo školy, môžeš ho darovať niekomu inému.

2. **Krok 3 v „Tvoja cesta k preukazu“**
   - „Schválime = preukaz zadarmo“ upravíme na „Schválime = kupón do e-shopu“, s textom: dostaneš kupón v hodnote preukazu na rok; ak preukaz už máš zo školy, kupón použiješ pre koho chceš.

3. **Nový info blok „Ako získam odmenu?“** (za sekciou preukazov)
   - 3 stručné body v hravom štýle:
     - Kupón v hodnote preukazu ISIC / ITIC / EURO<26 na 1 rok do nášho e-shopu.
     - Školské preukazy (vydané cez školu) sa cez program vydať nedajú.
     - Kupón je prenosný – ak už preukaz máš, môžeš ho darovať niekomu inému.
   - Farebnosť podľa schválených brand farieb (teal / žltá / ružová / oranžová).

4. **FAQ – nové otázky** (na oboch stránkových verziách, ak ostáva pôvodná)
   - „Mám preukaz už zo školy – o čo prídem?“ → Kupón je prenosný, preukaz môžeš kúpiť niekomu inému.
   - „Prečo nedostanem priamo preukaz?“ → Školské preukazy vieme vydať len cez školu; preto dostaneš kupón do e-shopu v plnej hodnote preukazu.

5. **Formulár** (`ApplicationForm.tsx`)
   - Pri výbere „Áno, už ho mám“ pridáme vysvetlivku: ak je to preukaz vydaný školou, kupón môžeš použiť pre niekoho iného.
   - Text po odoslaní upravíme: „…ak ich schválime, pošleme ti kupón do e-shopu v hodnote preukazu na 1 rok.“
   - Výber „Nie, chcem nový“ – vysvetlivka, že nový preukaz si vybaví kupónom v e-shope (nie školský preukaz).

6. **Podmienky** (`ambassador-terms.ts` / PDF)
   - Bez zásahu do znenia článkov. Ak bude treba, doplníme vysvetľujúcu poznámku v úvode podmienok (nie v zmluvnom texte), že kupón je prenosný. Tento bod najprv konzultujem, či ho chceš aj v PDF.

## Technické detaily

- Iba textové/obsahové zmeny v komponentoch: `src/components/ugc/PlayfulAmbassadorPage.tsx`, `src/components/ugc/ApplicationForm.tsx`, prípadne `src/components/ugc/Sections.tsx` (pôvodná verzia).
- Žiadne zmeny schémy, databázy ani validácie – pole „mám už preukaz / chcem nový“ ostáva.
- Brand farby a typografia bez zmeny; nový blok v existujúcom hravom štýle.
- Overenie: build + vizuálna kontrola desktop/mobile cez prehliadač.
