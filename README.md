# Landing Page

Standalone Next.js 16 project containing only the Z2A landing-page-v2 route.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the root path redirects to `/landing-page-v2`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript type-check only |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx              Root layout (forces dark theme)
│  ├─ page.tsx                Redirects "/" → "/landing-page-v2"
│  ├─ globals.css             Z2A color tokens, fonts, motion
│  └─ landing-page-v2/
│     ├─ layout.tsx
│     └─ page.tsx
├─ components/
│  ├─ BrandWordmark.tsx
│  ├─ blocks/features-11.tsx
│  └─ ui/
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ infinite-slider.tsx
│     └─ progressive-blur.tsx
└─ lib/utils.ts
```
