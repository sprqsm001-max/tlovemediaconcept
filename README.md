# Tlove Media Concept — Redesigned Website (Deploy-Ready Package)

**Design concept:** "Pink Shutter" · Ink `#0E0E12` + Pink `#E83E8C` · Space Grotesk + Inter

## Pages
| File | URL (live) | Purpose |
|---|---|---|
| `index.html` | `/` | Dark studio hero, pink marquee, masonry work grid, accordion services, playlist slot |
| `blog.html` | `/blog` | Featured story + post grid (audited posts cleaned & deduplicated) |
| `real-estate.html` | `/real-estate` | Professional listing cards with specs & prices (replaces phone screenshots) |
| `insurance.html` | `/insurance` | Policy cards + Custodian Life Assurance partner note + 3-step process |
| `the-ceo.html` | `/the-ceo` | Professional bio + career timeline (private data removed per audit) |
| `movies.html` | `/movies` | **Playlist-based featured player** + production stills grid |
| `contact.html` | `/contact` | Quote form with service selector, tappable phone/WhatsApp/email |
| `404.html` | — | Custom not-found page (`noindex`) |

## Deploy
1. Upload **all files** (including `.htaccess`, `robots.txt`, `sitemap.xml`) to the web root of `tlovemediaconcept.topservice.ng`.
2. Apache `mod_rewrite` forces HTTPS and serves the extensionless URLs in `sitemap.xml`.
3. Replace the two YouTube placeholders with the channel's **uploads playlist embed**:
   `https://www.youtube.com/embed/videoseries?list=<UPLOADS_PLAYLIST_ID>`
   (Comment in `movies.html` explains why: the audited site embedded one video ID that was later deleted, 404ing forever. A playlist can never go stale.)
4. Submit `sitemap.xml` in Google Search Console.

## Local preview
Open `index.html` — all internal links use `.html` filenames and work from file://.

## Audit fixes baked in
- ✅ Dead YouTube embed (`ww7EDz6fe3E` → oEmbed 404) replaced with a playlist-slot design; visible filename text "VIDEO-2022-07-04-23-06-26.mp4" removed; 32×32 Drive icon removed.
- ✅ Brand name unified: **Tlove Media Concept** everywhere (audited site Mixed Concept/Coverage; logo says "media coverage" — keep as a tagline only, or have the logo redone).
- ✅ Real-estate screenshots (watermarked phone shots, typos like "palour"/"packing space") replaced with professional photography and clean spec cards. Prices kept as placeholders — confirm before launch.
- ✅ "WE ARE HIRING" flyer removed from Insurance; insurer attribution clarified (Custodian Life Assurance Ltd as partner, not the only option).
- ✅ CEO page: personal Gmail/Yahoo addresses, home address and the reversed "2016-2010" date removed; typo "AIESEC Alunma" eliminated; monogram placeholder pending an official portrait.
- ✅ Blog cleaned: duplicated "laugh together often" / "Call each during the day" fixed; duplicate INVENTIONS posts merged; "Time" stub expanded; Haiti post restructured with stale facts removed.
- ✅ Phone written one way everywhere: `+234 908 678 8823`, and all images carry proper, descriptive alt text (audited site repeated identical alt ×16/×24).
- ✅ Unique title + meta description + canonical + OG per page; `robots.txt` + `sitemap.xml` included.
- ✅ File extensions corrected (all package images are true JPEGs/PNGs with matching extensions).

## Still needed from the boss (decisions pending)
1. Official business email (package uses `hello@tlovemediaconcept.com` placeholder).
2. Official portrait of the CEO + approved bio facts.
3. YouTube channel URL / uploads playlist ID.
4. Confirm whether "Prixmex Homes & Services" is a formal media partner (mentioned in the partner note).
5. Real property photos, prices and inspection process for listings (images here are illustrative renders).
