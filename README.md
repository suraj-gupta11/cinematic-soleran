# SOLERAN CINEMATIC
> **A Little Extraordinary** · Premium Cinematic Café Website

Soleran Cinematic is a production-grade, editorial luxury café brand experience built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP ScrollTrigger, and Lenis smooth scrolling. The experience evokes quiet luxury with an artisan black-and-champagne-gold aesthetic, oversized italic serif typography, floating food photography, generous negative space, and synchronized scroll-driven transitions.

---

## 1. Project Overview

Soleran is designed to feel like a luxury brand campaign rather than a conventional café menu. Every detail is crafted around slow living, artisan roasting, and quiet indulgence:
- **00 / The Experience**: Cinematic hero scene introducing the brand with an ambient amber spotlight and local photography.
- **01 / The Signature Pour**: Mango Milkshake in a tall ribbed crystal highball with fresh mango spear and velvety finish.
- **02 / The Daily Ritual**: Slow Cappuccino in matte black ceramic with intricate rosetta latte art and microfoam.
- **03 / The Indulgent Finish**: Crispy Belgian Chocolate Waffle with dark chocolate drizzle and shaved cocoa curls.
- **04 / The Philosophy**: Our Story narrative showcasing the artisan pour-over ritual and slow craft principles.
- **05 / Visit Us**: Sanctuary location details (12 Olive Lane, Bengaluru), opening hours, and direct concierge contact.
- **Footer**: Deliberate conclusion with dynamic year, navigation links, and smooth back-to-top action.

---

## 2. Key Features

- **Quiet Luxury Art Direction**: Curated palette (`#080807` primary background, `#C8A96B` champagne gold accents, `#F5F0E7` warm cream typography) with film grain and vignette overlays.
- **Scroll-Driven Storytelling**: GSAP ScrollTrigger timeline pins the product story on desktop, transitioning between scenes while smoothly scrubbing typography, lighting, and images.
- **Dynamic Product Indicator**: Real-time `01 / 03`, `02 / 03`, `03 / 03` counter reflecting the active product.
- **Lenis Smooth Scrolling**: Decoupled, inertial smooth scrolling clock-synchronized with GSAP's ticker (`gsap.ticker.lagSmoothing(0)`).
- **Responsive Architecture**: Multi-product pinned desktop scene gracefully adapts on mobile and tablet into an intuitive touch-friendly stacked sequence with zero scroll-locking.
- **Accessible & Motion-Aware**: Full keyboard navigation, semantic HTML5 landmarks, and automatic fallback for users with `prefers-reduced-motion: reduce`.
- **Local Asset Autonomy**: All photography is locally bundled under `public/images/` with Next.js Image component optimization and no external runtime dependencies.

---

## 3. Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS 4 & Vanilla CSS custom design tokens
- **Animations**: GSAP 3 (ScrollTrigger, matchMedia, context cleanup)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Editorial Serif) & DM Sans (Modern Sans-Serif) via `next/font/google`

---

## 4. Project Structure

```
soleran-cinematic/
├── public/
│   ├── images/
│   │   ├── hero-cafe.jpg            # Hero café interior asset
│   │   ├── mango-milkshake.jpg      # Product 01 photography
│   │   ├── cappuccino.jpg           # Product 02 photography
│   │   ├── chocolate-waffle.jpg     # Product 03 photography
│   │   └── story-cafe.jpg           # Story barista ritual asset
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css              # Theme tokens, grain overlay, vignette, & resets
│   │   ├── layout.tsx               # Root layout, Google Fonts, & OpenGraph metadata
│   │   ├── page.tsx                 # Composed single-page application
│   │   └── icon.svg                 # Gold monogram brand icon
│   ├── components/
│   │   ├── Navbar.tsx               # Minimal fixed navigation & mobile drawer
│   │   ├── HeroSection.tsx          # 100svh cinematic hero with GSAP intro
│   │   ├── ProductStory.tsx         # Pinned desktop container & mobile scroll scenes
│   │   ├── ProductScene.tsx         # Reusable asymmetric product layout
│   │   ├── StorySection.tsx         # Brand narrative with scroll reveal
│   │   ├── VisitSection.tsx         # Visit card with direct contact links
│   │   ├── Footer.tsx               # Footer with back-to-top action & copyright
│   │   ├── ScrollProgress.tsx       # Subtle gold progress bar at top of viewport
│   │   └── SmoothScroll.tsx         # Client activator for Lenis smooth scrolling
│   ├── hooks/
│   │   ├── useReducedMotion.ts      # React 19 useSyncExternalStore motion hook
│   │   └── useSmoothScroll.ts       # Lenis + GSAP ScrollTrigger engine sync
│   ├── lib/
│   │   └── products.ts              # Strongly typed product data store
│   └── types/
│       └── index.ts                 # Product and navigation interfaces
├── package.json
├── tsconfig.json
└── README.md
```

---

## 5. Prerequisites

- **Node.js**: `v18.18.0` or higher (tested on Node v24)
- **npm**: `v9.0.0` or higher (or equivalent package manager)

---

## 6. Local Setup & Commands

Clone or navigate into the project directory:

```bash
cd soleran-cinematic
```

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

Run TypeScript verification:
```bash
npm run typecheck
```

Run ESLint checks:
```bash
npm run lint
```

Build production bundle:
```bash
npm run build
```

Start production server:
```bash
npm run start
```

---

## 7. How to Customize Products & Images

### Replacing Product Images
Add your photography to `public/images/`:
- `hero-cafe.jpg` (16:9 or 4:5 recommended)
- `mango-milkshake.jpg` (3:4 aspect ratio recommended)
- `cappuccino.jpg` (3:4 aspect ratio recommended)
- `chocolate-waffle.jpg` (3:4 aspect ratio recommended)
- `story-cafe.jpg` (16:10 aspect ratio recommended)

### Modifying Products Data
Open [`src/lib/products.ts`](src/lib/products.ts). You can change names, descriptions, categories, prices, and notes:

```typescript
{
  id: 'mango-milkshake',
  number: '01',
  name: 'Milkshake',
  nameItalic: 'Mango',
  subtitle: 'The Signature Pour',
  description: 'Sun-ripened mango, silky milk, and a velvet finish. A little sunshine in every sip.',
  price: '₹249',
  category: 'THE SIGNATURE POUR',
  image: '/images/mango-milkshake.jpg',
  imageAlt: 'Artisanal mango milkshake in tall crystal glass',
  accent: '#C8A96B',
  note: 'FRESH MANGO · MADE TO ORDER',
  composition: 'text-left', // or 'image-left'
}
```

---

## 8. GSAP & Lenis Architecture

1. **Lenis Integration** ([`src/hooks/useSmoothScroll.ts`](src/hooks/useSmoothScroll.ts)):
   - Initializes Lenis with custom easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
   - Synchronizes scroll events directly with GSAP's `ScrollTrigger.update`.
   - Mounts the `lenis.raf()` call inside GSAP's central `gsap.ticker`, avoiding dual animation clocks and eliminating frame drops.
   - Disables `gsap.ticker.lagSmoothing(0)` to prevent scrub lag.

2. **ScrollTrigger Pinning** ([`src/components/ProductStory.tsx`](src/components/ProductStory.tsx)):
   - Uses `gsap.matchMedia()`:
     - On desktop (`min-width: 1024px`), pins the `.relative.w-full.h-screen` container for `+=240%` viewport distance.
     - A master timeline scrubs the 3 scenes into view sequentially using `power2.out` transitions.
     - On mobile and tablet (`max-width: 1023px`), pinning is automatically bypassed in favor of individual scroll-triggered entrances, guaranteeing full touch scrollability.
   - All timelines and triggers are encapsulated inside `gsap.context()` for clean teardown upon unmounting.

3. **Reduced Motion**:
   - The [`useReducedMotion`](src/hooks/useReducedMotion.ts) hook checks `prefers-reduced-motion: reduce`. When active, animations degrade gracefully into static editorial views.

---

## 9. Vercel Deployment Guide

To deploy this project to Vercel:

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd soleran-cinematic
   git init
   git add .
   git commit -m "feat: complete Soleran Cinematic luxury café website"
   ```

2. **Push to GitHub**:
   - Create a new repository on [GitHub](https://github.com).
   - Link and push your local branch:
     ```bash
     git remote add origin https://github.com/<your-username>/soleran-cinematic.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Vercel**:
   - Sign in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New Project** and select your GitHub repository `soleran-cinematic`.
   - Vercel automatically detects **Next.js**.
   - No environment variables are required.
   - Click **Deploy**.
   - Verify the production preview URL provided by Vercel.

---

## 10. Troubleshooting

- **Port in Use**: If port 3000 is occupied, Next.js will automatically select port 3001. Check terminal output for the active URL.
- **ScrollTrigger Offset**: If anchor links need adjustment, tune the `offset` parameter in `lenis.scrollTo(element, { offset: -30 })` in `src/hooks/useSmoothScroll.ts`.
- **Static Assets**: Next.js automatically caches assets in `public/`. When replacing images with the same filename, clear the `.next` cache directory by running `rm -rf .next && npm run dev`.

---

© 2026 Soleran Artisan Café. All rights reserved.
