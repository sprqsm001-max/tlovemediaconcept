# OPTIMIZATION GUIDELINES — Tlove Media Concept
*Standards every page in this package already follows — keep to them when adding or regenerating pages.*

## 1. Document head recipe (copy this pattern for every new page)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page} | Tlove Media Concept ({50–60 chars total})</title>
<meta name="description" content="{150–160 chars, keyword + one action}.">
<link rel="canonical" href="https://tlovemediaconcept.topservice.ng/{extensionless-slug}">
<meta property="og:type|og:site_name|og:title|og:description|og:url|og:image">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0E0E12">
<link rel="stylesheet" href="assets/style.css">
<script src="assets/main.js" defer></script>
```

## 2. Content rules
- **Brand name is "Tlove Media Concept" everywhere.** The audit found "Media Coverage" in the logo and body. Coverage is a service, not the name — never mix them again.
- One `<h1>` per page; headings in Space Grotesk (uppercase display allowed), body in Inter.
- Voice: bold, warm, Lagos-creative. Short lines. No lorem-ipsum, no copied encyclopaedia text (the audit found a ~60-paragraph Wikipedia paste as a blog post — blog posts must be original, 400–900 words, edited for typos and dupes before publishing).
- One phone format site-wide: `+234 908 678 8823`, linked `tel:+2349086788823`. One inbox: `hello@tlovemediaconcept.com` (placeholder until the boss confirms the real one). Never publish personal Gmail/Yahoo addresses or home addresses (the audit found both on the CEO page).
- Facts: no unverifiable claims, no stale political facts, and dates in chronological order (audit found "2016–2010").

## 3. Image rules
- Real shoots only for work/movies sections — no third-party flyers, no screenshots with other businesses' phone numbers (both appeared in the audit).
- Listings: professional photos, uncropped, no chat-app watermarks; specs written-out (`bedrooms`, not "story building"/"palour" typos).
- Every image: descriptive `alt` (unique per image — audit repeated one alt ×24), `loading="lazy"` off-hero, explicit dimensions, < 250 KB after compression, extension matching the real format (audit had JPEGs named `.png` and PNGs named `.jpg`).

## 4. Video rules (structural fix for a 🔴 audit issue)
- Never embed single YouTube video IDs bare — deleted videos leave permanent 404 players (exactly what happened on the audited Movies page). Embed the channel **uploads playlist**: `https://www.youtube.com/embed/videoseries?list=...`
- No auto-play; nothing plays until tapped. No visible file names ("VIDEO-2022-07-04-23-06-26.mp4" must never appear on-page).

## 5. Performance budget
- One CSS + one JS (`defer`), font `display=swap`, `preconnect` to fonts hosts.
- The CSS marquee is free (no library). Keep animations `transform/opacity`-only.
- The shared 845 KB hero JPEG repeated on 4 audited pages is gone — never reuse one oversized image site-wide; compress per-use.

## 6. Accessibility (dark-theme specifics)
- Body text on ink background: `#B9B9C6` is the minimum brightness; pink `#E83E8C` text only for labels/buttons (not paragraphs).
- Outlined display type (`-webkit-text-stroke`) is decorative — the same words appear as real text elsewhere on the page.
- Visible focus states on the dark background; menu/accordion fully keyboard-usable.

## 7. SEO / discoverability
- `robots.txt` + `sitemap.xml` at root (absent on audited site); sitemap lists extensionless canonical URLs; `.htaccess` forces HTTPS + normalises trailing slashes + serves custom 404.
- Blog posts get their own canonical URLs when they become full pages; update `<lastmod>` on publish.
- Keep ProfessionalService JSON-LD synced with real contact data.

## 8. Adding content (checklist)
- New blog post: new card on `blog.html` (and later its own page), unique image + alt, category colour tag, original copy, proof-read.
- New listing: photo set (3+), specs, honest price, inspection CTA — then delete when sold.
- New video: upload to channel → appears automatically once the playlist embed is wired.
