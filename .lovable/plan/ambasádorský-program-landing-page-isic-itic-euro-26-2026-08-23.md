# Ambasádorský program – landing page (ISIC / ITIC / EURO<26)

Verejná landing page pre UGC ambasádorský program, spoločná pre všetky tri preukazy, s registračným formulárom, ktorý ukladá prihlášky do databázy v Lovable Cloud.

## Logá – áno, potrebujem ich

Pošli mi prosím:
- ISIC, ITIC a EURO<26 logo (SVG alebo PNG s transparentným pozadím)
- prípadne logo vydavateľa (CKM SYTS / iné), ak má byť v hlavičke a footri

Kým prídu, použijem typografické placeholdery na rovnakých miestach a po uploade ich len vymením.

## Vizuálny štýl

Podľa priložených ISIC brand guidelines:
- Roboto (základ) + Roboto Slab (nadpisy/akcenty), načítané v head root routy
- ISIC teal `#40B8B8` / dark teal `#006666`, light teal `#D9F1F1`, akcentová žltá `#FEEF00`, čierna, sivá `#666666`
- Sekundárne akcenty pre ITIC (modrá `#008CDC` / `#004B82`) a EURO<26 (oranžová `#FF7314` / `#B41E00`) – použité pri výbere preukazu a v kartách
- Všetko cez semantické tokeny v `src/styles.css`, žiadne hardcodované farby v komponentoch
- Mladý, energický, mobile-first dizajn; veľká bold typografia, dynamické karty, žiadne generické gradienty

## Obsah stránky (slovensky, podľa zadania)

1. **Hero** – „3 videá = ISIC / ITIC / EURO<26 na rok zadarmo“, podnadpis, CTA „Chcem sa zapojiť“ (scroll na formulár), badge o obmedzenej kapacite
2. **Ako to funguje** – 3 kroky (prihlás sa → schválime videá → preukaz zadarmo)
3. **Čo môžeš natáčať** – mriežka nápadov na videá (3 veci po škole, koľko som ušetril, kam chodím na zľavu, cestovanie, trend/vtipná situácia, vlastný nápad)
4. **Nemusíš byť influencer** – sekcia s tromi podmienkami (prirodzenosť, nápady, chuť tvoriť)
5. **Čo za to dostaneš** – kupón v hodnote preukazu na 1 rok + benefity (použitie na sociálnych sieťach, skúsenosť, portfólio, zásah)
6. **Kto sa môže zapojiť** – podmienky programu vrátane vekových/statusových nárokov na jednotlivé preukazy
7. **Čo znamená schválené video** – kvalitatívne kritériá
8. **FAQ** – accordion s otázkami zo zadania
9. **Formulár** – registrácia ambasádora
10. **Footer** – logá, odkaz na podmienky programu, kontakt, poznámka o obmedzenej kapacite

## Formulár a overenie nároku

Kroky/polia:
- Meno a priezvisko, e-mail, telefón, mesto, dátum narodenia
- **Výber preukazu** (povinné, jeden z troch): ISIC / ITIC / EURO<26 – vizuálne karty
- **Stav**: mám už preukaz (+ číslo preukazu) / chcem nový
- **Dynamické polia podľa zvoleného preukazu (self-deklarácia nároku):**
  - ISIC: názov školy, typ štúdia (denné SŠ/VŠ), akademický rok
  - ITIC: názov školy/inštitúcie, pozícia, úväzok (min. rozsah vyučovania)
  - EURO<26: dátum narodenia sa validuje na vekový limit do 26 rokov
- Sociálne siete (Instagram / TikTok handle), voliteľný link na ukážku UGC
- Krátky text „prečo ty“ + skúsenosti s tvorbou obsahu
- Povinné checkboxy: potvrdenie nároku na zvolený preukaz, súhlas s podmienkami programu a s použitím obsahu, súhlas so spracovaním osobných údajov
- Validácia zodpovedajúca preukazu prebieha na klientovi aj na serveri; pri nesplnení nároku (napr. vek nad limit pri EURO<26) formulár jasne vysvetlí, prečo nárok nie je, a navrhne vhodnejší preukaz
- Po odoslaní: potvrdzovacia obrazovka s ďalšími krokmi

## Technické detaily

- Landing page nahradí placeholder na `/` (`src/routes/index.tsx`), sekcie ako komponenty v `src/components/ugc/`
- Zapnem Lovable Cloud; migrácia vytvorí tabuľku `ambassador_applications` (typ preukazu ako enum `card_type`, stav prihlášky ako enum `application_status`, dynamické polia nárokovania, timestampy) s GRANTmi a RLS: verejné vkladanie iba cez server funkciu, čítanie výhradne pre admin rolu (`user_roles` + `has_role`), žiadny anonymný SELECT
- Odoslanie beží cez `createServerFn` so Zod validáciou vrátane pravidiel nároku podľa preukazu; zápis privilegovaným klientom až po validácii, aby prihlášky neboli verejne čitateľné
- Kapacitný limit: počítadlo schválených/prijatých miest, konfigurovateľné v jednej konstante, v UI zobrazené ako „zostáva X miest“
- SEO: vlastný `head()` na `/` s titulkom, popisom, og/twitter metadátami; jeden H1, semantické sekcie, alt texty
- Formuláre cez shadcn `Form` + react-hook-form + zod, notifikácie cez sonner (Toaster pridám do `__root.tsx`)
