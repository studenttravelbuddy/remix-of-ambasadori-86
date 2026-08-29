# Formulár: kam idú odpovede + odkazy na videá

## Čo sa zmení

### 1. Odkazy na videá – jedno pole + „+“
- Namiesto troch povinných polí bude **jedno pole na odkaz** a tlačidlo **„+ Pridať ďalší odkaz“**.
- Povinný je **minimálne 1 odkaz** (môže obsahovať všetky 3 videá naraz – napr. jedna zložka na Google Drive), maximum 5.
- Každý odkaz sa dá odstrániť (okrem prvého), validácia stále vyžaduje `https://`.
- Pole bude vizuálne ako „drop“ priestor s vysvetlením: nahraj videá na Disk Google / Dropbox / WeTransfer a sem vlož odkaz.
- Text nad polom upravím na: stačí jeden odkaz na zložku so všetkými videami, alebo pridaj viac odkazov.

### 2. Kam sa ukladajú vyplnené formuláre
- Ukladajú sa (a už teraz sa ukladali) do databázy v Lovable Cloud, tabuľka **ambassador_applications** – meno, e-mail, telefón, mesto, dátum narodenia, zvolený preukaz, nárok, škola/zamestnávateľ, sociálne siete, odkazy na videá, motivácia, súhlasy, stav a dátum.
- Zoznam prihlášok si vieš kedykoľvek nechať vypísať v chate (viem ich zobraziť aj exportovať). Vlastnú admin stránku podľa dohody nerobím.
- Aktuálne v tabuľke nie sú žiadne reálne prihlášky (testovacia bola zmazaná).

### 3. E-mail notifikácia na marketingsimi@ckmsyts.sk
- Po každom úspešnom odoslaní prihlášky odíde e-mail na **marketingsimi@ckmsyts.sk** so všetkými údajmi z formulára a klikateľnými odkazmi na videá.
- Predmet: „Nová prihláška ambasádora – {meno} ({preukaz})“.
- Odosielateľ: dočasná testovacia adresa (zabudované e-maily v Lovable). Keď budeš chcieť posielať z vlastnej domény ckmsyts.sk, doplníme DNS záznamy – doručiteľnosť bude potom lepšia.
- Ak by odoslanie e-mailu zlyhalo, prihláška sa aj tak uloží do databázy a používateľ uvidí úspech (chyba sa len zaloguje).

## Technická časť
- Migrácia: pridať `video_urls text[]` do `ambassador_applications` (staré `video1_url`–`video3_url` zostanú, ale nové prihlášky použijú pole odkazov; pre kompatibilitu sa prvé tri odkazy zapíšu aj do nich).
- `src/lib/ambassador.ts`: nahradiť `video1Url/2/3` schémou `videoUrls: z.array(videoUrl).min(1).max(5)`.
- `src/components/ugc/ApplicationForm.tsx`: `useFieldArray` pre dynamické odkazy, jedno pole + „+“, mazanie riadkov; funguje v oboch variantoch (základný aj playful).
- `src/lib/ambassador.functions.ts`: insert s `video_urls`, potom odoslanie notifikačného e-mailu (server-side, cez zabudované e-maily / Resend gateway s `LOVABLE_API_KEY`) v `try/catch`, aby chyba e-mailu nezhodila prihlášku.
- Overenie: build + Playwright test odoslania s 1 odkazom a s 3 odkazmi, potom vymazanie testovacích záznamov.
