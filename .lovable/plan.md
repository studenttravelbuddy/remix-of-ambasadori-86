# Formulár – videá na jednom mieste + e-mail notifikácia

Zmena, ktorú si ešte nevidíš, lebo bola len naplánovaná a neimplementovaná: namiesto troch pevných polí na odkazy bude jeden priestor, kde sa dajú pridávať odkazy tlačidlom „+“ (minimálne 1, maximálne 5). Stačí teda jeden link so všetkými videami, alebo tri rovnaké — validácia to akceptuje.

## Zmeny vo formulári

- Odstránim polia „Odkaz na video 1/2/3“ a nahradím ich jedným dynamickým blokom „Odkazy na videá“:
  - štartuje s jedným poľom,
  - tlačidlo „+ Pridať ďalší odkaz“ pridá pole (max 5),
  - nepotrebné polia sa dajú odstrániť krížikom (okrem prvého),
  - každý odkaz musí začínať https://, minimálne 1 vyplnený.
- Textová pomoc pri poli: „Videá môžeš nahrať na jeden odkaz (napr. spoločný playlist/Drive) alebo pridať viacero odkazov.“

## Databáza (Lovable Cloud)

- Migrácia pridá stĺpec `video_urls text[]` do `ambassador_applications`.
- Staré stĺpce `video1_url`–`video3_url` zostávajú (existujúce prihlášky sa nestratia); nové prihlášky ukladajú odkazy do poľa `video_urls` a prvý odkaz sa pre spätnú kompatibilitu skopíruje aj do `video1_url`.

## Server funkcia a validácia

- `src/lib/ambassador.ts`: `videoUrls` pole (zod: array HTTPS odkazov, min 1, max 5) namiesto troch povinných polí.
- `src/lib/ambassador.functions.ts`: zápis `video_urls` + `video1_url` = prvý odkaz.

## E-mail notifikácia

- Po úspešnom odoslaní prihlášky sa odošle e-mail na **marketingsimi@ckmsyts.sk** s údajmi prihlášky (meno, e-mail, telefón, preukaz, odkazy na videá).
- Odosielanie cez Resend (potrebný API kľúč — po schválení plánu ťa vyzvem cez bezpečné okno na jeho vloženie; zatiaľ môže odosielať z testovacej adresy, neskôr sa dá overiť vlastná doména).

## Kde nájdeš vyplnené prihlášky

- Všetky prihlášky sú uložené v databáze v Lovable Cloud (tabuľka `ambassador_applications`) — pozrieš ich cez tlačidlo „View Backend“ v editore, sekcia Databáza.
- E-mail bude slúžiť ako okamžitá notifikácia.

## Overenie

- Build bez chýb.
- Playwright: vyplnenie formulára s jedným odkazom aj s viacerými rovnakými odkazmi, odoslanie, kontrola záznamu v databáze a jeho vymazanie.
