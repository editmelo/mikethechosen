# Mike the Chosen — Landing Page Design Spec

**Date:** 2026-06-18
**Goal:** A single-page promotional landing site that showcases R&B artist Mike the Chosen and drives visitors to listen to his music.

## Decisions (locked)

- **Primary CTA:** Listen to the music. Booking is a strong secondary.
- **Look & feel:** Luxe gold & black — soulful, premium, ornate, matching the crown logo.
- **Delivery:** Next.js (App Router) + Tailwind CSS, deployable to Vercel.
- **Music links:** No streaming files/URLs exist yet. ALL music CTAs route to the Linktree.
- **Cash Bash 2:** Past event (was June 14, 2026) — framed as a recent career highlight, not upcoming.

## Brand system

- **Palette:** near-black `#0C0C0E` background; gold gradient `#C9A24B → #E9CC7A`; warm off-white `#F4EFE6` body text; muted gray `#9A958C` for secondary text.
- **Type:** Playfair Display (display serif, headlines) + Inter (sans, body/UI). Loaded via `next/font/google`.
- **Texture/feel:** generous black space, thin gold hairline rules, soft gold glow on focal images, subtle fade/slide-in on scroll.

## Assets (from EPK, in `/public`)

| File | Source | Use |
|------|--------|-----|
| `logo.jpg` | gold crown wordmark on slate | nav brand, footer |
| `portrait-neon.jpg` | 2592×1728 neon-lit portrait | hero background |
| `portrait-car.jpg` | 485×1024 leather-jacket portrait | Story section |
| `one-shot.jpg` | 1024×1024 single cover | Featured release |
| `cashbash.jpg` | 759×1024 event flyer | Live / highlight |

## Page structure (single scroll, anchor nav)

1. **Sticky nav** — crown logo; links Music · Story · Live · Credits · Connect; gold **Listen** button.
2. **Hero** — full-bleed darkened neon portrait; "MIKE THE CHOSEN" gold serif; tagline *R&B · Soul · Songwriter · Producer · Indianapolis*; CTA **▶ Listen to "One Shot"** (Linktree) + **Book Mike**.
3. **Featured release** — "One Shot" cover (Mike Mosley × Yattigodbodi), "Streaming Everywhere" → Linktree; No. 1 hits named: After The Club · Back 2 U · What It Does.
4. **The Story** — origin (singing from age 6, inspired by his mother; decades honing his craft, Indianapolis) + solo era (signed LBH Multimedia Jan 2025; solo deal RockStar / ICO / Warner Bros.). Paired with car portrait.
5. **Highlights strip** — gold stat cards: Signed to RockStar/ICO/Warner Bros · Featured on iHeartRadio & EAJ 1023 (Eddie O'Jay Show) · Opened Cash Bash 2.
6. **Live / Cash Bash 2** — flyer; recent highlight, opened for T-Pain, 2 Chainz, Chance the Rapper, Travie McCoy, Young Cash, KaMillion.
7. **Credits & collaborations** — Written/worked with: Father MC, Isaac Hayes, Lil "G" (Silk), John Howcott, Rodney Phillips, Melvin McLain. Shared the stage with: Keith Sweat, SWV, Deniece Williams, Christopher Williams, Riff, David Banner. Former member of A Few Good Men.
8. **Beyond the music** — father of seven; active in his Indianapolis community.
9. **Connect / Book footer** — LBH Multimedia 317-518-9198; mikethechosenllc@gmail.com; Instagram @mikethechosen_llc & @bigmikemosley_; Linktree. Repeated Listen CTA.

## Contact / link reference

- Email: mikethechosenllc@gmail.com
- Booking: LBH Multimedia Group, 317-518-9198
- Instagram: https://www.instagram.com/mikethechosen_llc/ , https://www.instagram.com/bigmikemosley_/
- Linktree: https://link.me/mikethechosen

## Component breakdown (each isolated, single purpose)

- `Nav` — sticky header, anchor links, Listen button.
- `Hero` — background image + headline + CTAs.
- `FeaturedRelease` — single cover + hits list.
- `Story` — bio copy + portrait.
- `Highlights` — stat-card row.
- `Live` — flyer + lineup.
- `Credits` — two grouped lists.
- `Beyond` — short human note.
- `Footer` — contact/booking/social + CTA.
- `Reveal` — small wrapper for scroll-in animation.
- `siteData.ts` — all copy, links, and lists in one place for easy edits.

## Out of scope (YAGNI)

- No embedded audio players (no files yet).
- No CMS, forms backend, or multi-page routing.
- No individual track pages — all music routes to Linktree.

## Success criteria

- `npm run build` passes; page renders all 9 sections responsively (mobile + desktop).
- Every music CTA points to the Linktree; booking/contact info is correct.
- Visual direction reads as intentional luxe gold-on-black, not a template default.
