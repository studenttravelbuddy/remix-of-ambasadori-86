# Doplnenie banneru kampane Ready for More

## Úprava kampanovej sekcie

- Do existujúceho placeholderu v sekcii „Ready for more?“ vložím dodaný banner `kv_2400x1200px.png` bez zmeny jeho grafiky.
- Banner zobrazím v plnej šírke priestoru, responzívne a bez deformácie; zachovám celý pomer strán 2:1, aby sa neorezali logá, text ani postavy.
- Nad názov kampane doplním text **„Kupónová kampaň Back to School 2026“**.
- Kliknutie na banner aj na názov **„Ready for more?“** bude viesť na zabezpečenú adresu `https://www.readyformore.isic.sk` a otvorí ju v novej karte.
- Odkazy dostanú bezpečné atribúty pre externé stránky a obrázok výstižný alternatívny text.

## Technické riešenie

- Nahrám dodaný PNG banner do projektového asset systému a použijem jeho CDN adresu v kampanovej sekcii.
- Odstránim iba pôvodný vizuálny obsah placeholderu; dátum **1. 9. 2026 – 17. 11. 2026**, ostatný obsah stránky, formulár a jeho logika zostanú nezmenené.

## Overenie

- Skontrolujem desktop aj mobil, celý neorezaný banner a správne poradie nového nadpisu, názvu a dátumu.
- Overím, že odkaz funguje samostatne z obrázka aj z názvu kampane a že stránka nemá build ani runtime chyby.
