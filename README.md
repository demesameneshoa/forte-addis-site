# FORTE — Corporate Website

Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Lenis smooth scroll.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, philosophy, stats, pinned horizontal pillar scroll, turning point, value chain, clients, impact |
| `/about` | Executive summary, lineage, turning point, why we exist, timeline, mission/vision/values, organization |
| `/services` | Overview of all 8 pillars |
| `/services/[slug]` | 8 statically generated service pages |
| `/value-chain` | Farm → processing → cold chain → delivery, "Frozen is the New Fresh", QA |
| `/clients` | Segments, why they stay, pain point → answer |
| `/team` | Leadership, functions, culture |
| `/sustainability` | Employment, school feeding, import substitution, local producers |
| `/careers` | Culture, hiring areas, application steps |
| `/contact` | Details + mailto enquiry form |

## Editing content

All copy, team members, services and image URLs live in `lib/content.ts`.

- **Images**: The image URLs in `IMG` are temporary Unsplash photos. Replace them with your own photography (put files in `public/images/` and use `/images/name.jpg`). If a photo fails to load, `Duotone` automatically falls back to the cover image.
- **Phone**: `CONTACT.phone` is still a placeholder.
- **Team**: the team cards show monograms. Add a `photo` field to each person when you have headshots.

## Scroll effects

- `components/SmoothScroll.tsx` — Lenis inertial scrolling (disabled for reduced-motion users)
- `components/PageHero.tsx` / `HomeHero.tsx` — parallax heroes with word-by-word title reveals
- `components/Duotone.tsx` — forest duotone images with parallax + clip-path reveal
- `components/HorizontalPillars.tsx` — pinned section that scrolls horizontally
- `components/ScrollText.tsx` — words light up as you scroll
- `components/ZoomPin.tsx` — pinned image expands from a framed window to full-bleed with rising text
- `components/StackCards.tsx` — value-chain steps pin and stack, receding as the next arrives
- `components/ScrollMarquee.tsx` — oversized outlined headlines that slide sideways with scroll
- `components/InViewWords.tsx` — every section title rises word-by-word from a mask
- `components/Counter.tsx` — count-up numbers on view

## Deploy

Push to GitHub and import into Vercel — no configuration needed.
