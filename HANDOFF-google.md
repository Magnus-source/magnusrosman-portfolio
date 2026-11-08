# Handoff: porträttbild och Google (magnusrosman.com)

Senast uppdaterad: 2026-11-08

## Läget

- Sajten ligger live på Oderland med det senaste bygget (commit 13d4b3c på GitHub, branch main).
- Nytt skarpt porträtt (Gemini-uppskalat) finns på https://magnusrosman.com/magnus-portrait.jpg, 1200x1788 px.
- About-sektionen: porträttet sträcker sig från titelns överkant till textens sista rad på desktop.
- Sitemap med bildpost: https://magnusrosman.com/sitemap.xml. robots.txt pekar på den.
- JSON-LD (Person + ImageObject + sameAs till Instagram/LinkedIn) och Open Graph är uppdaterade.
- Sajten ligger på plats 2 på Google för "Magnus Rösman". Kunskapspanelen visar en bild från Resume.se.
- Originalfilen i full upplösning: src/assets/magnus-portrait-master.jpeg. Gamla suddiga bilden: ~/Desktop/magnus-portrait-gammal.png.
- Google Search Console är INTE uppsatt. Ingen verifieringstagg på sidan.

## Kvar att göra (när det finns tid)

### A. Search Console (ca 15 min)
1. search.google.com/search-console, logga in, Lägg till egendom.
2. Välj Webbadressprefix, skriv https://magnusrosman.com/ (utan www), Fortsätt.
3. Verifieringsmetod HTML-tagg. Kopiera taggen och klistra in i Claude Code.
4. Claude lägger in taggen i index.html, bygger och gör ny dist.zip.
5. Ladda upp på Oderland: in i mappen magnusrosman.com, ta bort mappen assets, ladda upp dist.zip, extrahera, ta bort dist.zip.
6. Klicka Verifiera i Search Console.
7. Webbplatskartor: skriv sitemap.xml, Skicka.
8. Sökfältet högst upp: https://magnusrosman.com/, Begär indexering.

### B. Kunskapspanelen
1. Sök "Magnus Rösman" inloggad på Google.
2. Längst ner i panelen: Gör anspråk på den här kunskapspanelen.
3. Verifiera via Instagram (eller Search Console efter A).
4. När godkänd: knappen Föreslå ändringar dyker upp i panelen.

### C. Uppföljning (efter ca 1 vecka)
1. Google Bilder: sök site:magnusrosman.com. Syns porträttet är det indexerat.
2. Kunskapspanelen > Föreslå ändringar > välj porträttet som utvald bild.
3. Fråga fotografen om porträttet får släppas under fri licens för Wikipedia. Om ja: Claude hjälper till med Wikimedia Commons och Wikipedia-artikeln. Det är den säkraste vägen till panelbilden.

## Rutin för att publicera en kodändring
I projektmappen: npm run build && rm -f dist.zip && (cd dist && zip -qr ../dist.zip .)
Sedan Oderland-rutinen i A5.

## Fakta
- Oderland filhanterare: sajten ligger i /home/collinad/magnusrosman.com
- Search Console påverkar inte rankingen. Begärd indexering tar inte bort sidan ur index.
