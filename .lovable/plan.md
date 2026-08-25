# Podmienky ambasádorského programu ako PDF + digitálne prijatie

Zmluvu o dielo prerobím na dokument „Podmienky ambasádorského programu (zmluva o dielo a licenčná zmluva)“, ktorý sa nepodpisuje – ambasádor ho digitálne prijme zaklikanutím checkboxu vo formulári. Právne články zostávajú bez zmeny, mení sa len hlavička, identifikácia strán a záverečná časť o podpise.

## Čo sa zmení v dokumente

Zachované bez úprav: Články I.–VII. (predmet, cena, termín, práva a povinnosti, licencia, záverečné ustanovenia) v pôvodnom znení.

Upravená hlavička a preambula:
- Nový nadpis: „Podmienky ambasádorského programu – Zmluva o dielo a licenčná zmluva“
- Krátky odstavec navrchu: tieto podmienky sa neuzatvárajú podpisom; zhotoviteľ (ambasádor) ich prijíma elektronicky odoslaním prihlášky a zaškrtnutím súhlasu vo formulári na webe, čím vzniká zmluva s rovnakým obsahom.
- Zhotoviteľ nie je predtlačená tabuľka na vypísanie, ale odkaz: údaje zhotoviteľa sú tie, ktoré uviedol v prihláške (meno, e-mail, telefón, mesto, dátum narodenia).

Upravená odplata / predmet, aby bolo jasné, čo ambasádor dostane:
- Dielo = 3 krátke videá dodané podľa zadania na webe programu.
- Odplata = kupón na preukaz ISIC / ITIC / EURO<26 v hodnote členského na 1 rok (nepeňažné plnenie), po schválení videí. Bez peňažnej platby a bez faktúry.

Upravená záverečná časť:
- Namiesto „podpisujú“ / „nadobúda platnosť dňom podpísania“ → „nadobúda platnosť dňom elektronického prijatia podmienok pri odoslaní prihlášky“; miesto pre podpisy a text o dvoch exemplároch sa vypúšťa.
- ZADANIE (príloha) zostáva ako popis zadania na 3 videá, bez podpisových políčok.

## Napojenie na web

- PDF sa vygeneruje a uloží ako statický súbor `public/podmienky-ambasadorskeho-programu.pdf`.
- Vo formulári sa text checkboxu „Súhlasím s podmienkami ambasádorského programu.“ zmení tak, že „podmienkami ambasádorského programu“ bude odkaz na PDF (otvorí sa v novom okne). Rovnako pri súhlase s použitím obsahu doplním odkaz na ten istý dokument.
- V sekcii podmienok a vo footri pridám odkaz „Podmienky programu (PDF)“.
- Text vedľa checkboxu jasne uvedie: zaškrtnutím potvrdzuješ, že dodáš 3 videá podľa podmienok a po ich schválení dostaneš preukaz na rok zadarmo.

## Technické detaily

- PDF vygenerujem z upraveného textu dokumentu (Slovenčina s diakritikou, Unicode font), uložím do `public/` – aby bol odkaz stabilný a bez závislosti na CDN.
- Zmeny v kóde: `src/components/ugc/ApplicationForm.tsx` (labely súhlasov s odkazom), `src/components/ugc/Sections.tsx` (odkaz v sekcii podmienok a vo footri).
- Bez zmien v databáze a validácii; súhlas sa už ukladá v `terms_accepted` a `content_use_accepted`.
