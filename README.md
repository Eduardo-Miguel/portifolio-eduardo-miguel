# Eduardo Miguel — Portfolio

Personal portfolio / freelance-landing site for Eduardo Miguel, Senior Full Stack
Engineer (C#/.NET · React/Next.js). Next.js 16 (App Router), TypeScript, Tailwind
CSS v4. No backend, no database — content lives in `src/lib/data.ts` and
`src/lib/config.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- `src/lib/config.ts` — name, role, contact links, WhatsApp number, nav links.
- `src/lib/data.ts` — about text, stats, services, stack, experience, education,
  and **projects**. Two of the three project cards are placeholders (marked
  `placeholder: true`) — swap them for real work with a name, description,
  stack tags, and a `link`.
- `src/app/layout.tsx` — SEO metadata (title, description, Open Graph, JSON-LD
  Person schema). Update `knowsAbout` / `worksFor` if your stack or employer
  changes.
- `src/app/opengraph-image.tsx` / `src/app/icon.tsx` — generated social-share
  image and favicon (no photo needed). Replace with a real headshot later by
  swapping `TerminalCard` in `src/components/about.tsx` for a `next/image`.

## SEO checklist before going live

1. Buy/point a domain, then set `NEXT_PUBLIC_SITE_URL` in Vercel's project
   environment variables (see `.env.example`) — this drives canonical URLs,
   `sitemap.xml`, `robots.txt`, and Open Graph tags.
2. Submit the domain + `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
   and [Bing Webmaster Tools](https://www.bing.com/webmasters).
3. Validate structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
4. Run a Lighthouse pass (`npm run build && npm start`, then audit in Chrome
   DevTools) — the site ships with no heavy client libraries (no 3D/canvas,
   no animation framework) specifically to keep this fast.

## Deploying on Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel
   detects Next.js automatically, no config needed.
3. Add `NEXT_PUBLIC_SITE_URL` under Project Settings → Environment Variables.
4. Deploy. No Firebase, no separate hosting config required.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`, class-based dark
  mode via `next-themes`)
- Zero animation/3D dependencies — reveal-on-scroll and the pointer-tracked
  grid background are hand-rolled with `IntersectionObserver` and one
  `pointermove` listener, to keep the bundle and Lighthouse score small.
