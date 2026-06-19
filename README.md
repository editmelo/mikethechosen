# Mike the Chosen — Landing Page

A single-page promotional site for R&B artist **Mike the Chosen** (Michael "Big Mike" Mosley).
Built with **Next.js (App Router) + Tailwind CSS**. Luxe gold-and-black direction, listen-first.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build / production

```bash
npm run build
npm start
```

## Deploy

Push to a Git repo and import into **Vercel** (zero config) — or run `npx vercel`.
Any Node host works; it's a standard Next.js app.

## Editing the content

All copy, links, and lists live in **`lib/siteData.ts`** — change text there without
touching layout. Notable values:

- `LINKS.linktree` — every "Listen / Stream" button points here (no track files yet).
- `LINKS.email`, `LINKS.bookingPhone` — booking + contact.
- `FEATURED`, `STORY`, `HIGHLIGHTS`, `LIVE`, `CREDITS`, `BEYOND` — section content.

## Images

In `public/images/` (extracted from the EPK):

| File | Used in |
|------|---------|
| `logo-mark.png` | nav + hero + footer (background keyed out to transparent gold) |
| `portrait-neon.jpg` | hero background |
| `portrait-car.jpg` | Story section |
| `one-shot.jpg` | Featured release cover |
| `cashbash.jpg` | Live / Cash Bash 2 |

To swap a photo, drop a replacement in `public/images/` with the same filename.

## Structure

`app/page.tsx` assembles the sections; each section is its own component in `components/`.
`Reveal.tsx` handles the fade-in-on-scroll. Brand tokens (gold, ink, fonts) are in
`app/globals.css` under `@theme`.

## Notes

- No streaming files exist yet, so **all music CTAs route to the Linktree.** When real
  Spotify/Apple/YouTube links are available, add them in `lib/siteData.ts`.
- The Cash Bash 2 show (June 14, 2026) is presented as a **recent highlight**, not upcoming.
