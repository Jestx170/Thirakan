# Luxury Watch Repair & Restoration Website

A premium, minimal, Swiss-inspired multi-page site. White-first, dark blue text, red highlights, no gold. Manrope headings / Inter body. Framer Motion animations, rounded 12px, soft shadows, generous whitespace.

## Design System (src/styles.css + __root.tsx)

- Fonts: load Manrope + Inter via `<link>` in `__root.tsx` head.
- Tokens (light theme only, oklch equivalents of the palette):
  - `--primary` #780000, `--accent` #C1121F
  - `--foreground` / brand dark #003049, `--muted-foreground` softer blue-gray
  - `--secondary` / light-blue #669BBC
  - `--background` #FFFFFF, `--muted` #F8F9FA, `--border` #EAEAEA
  - `--radius` 0.75rem (12px)
  - Soft shadow utility: `--shadow-elegant`
- Update `__root.tsx` head with real title/description/OG for the business, keep NotFound + Error components.

## Route Architecture

Each shareable section gets its own route with unique `head()` metadata:

```
src/routes/
  __root.tsx        (Header + Footer layout, Outlet)
  index.tsx         (/ Home: hero + condensed highlights + CTA)
  services.tsx      (/services)
  process.tsx       (/our-process)
  pricing.tsx       (/pricing)
  about.tsx         (/about)
  reviews.tsx       (/reviews)
  contact.tsx       (/contact — includes booking form + contact info + map)
```

Header lives in `__root.tsx` RootComponent, transparent over hero on `/`, white/sticky on scroll (detect via scroll listener + `useRouterState` for route). Footer also in root, dark blue (#003049) with white text.

## Shared Components (`src/components/site/`)

- `SiteHeader.tsx` — transparent→white sticky nav, Book Repair CTA
- `SiteFooter.tsx` — dark blue footer, quick links, contact, hours, social
- `Hero.tsx` — headline "Precision Restored.", subheadline, two CTAs, trust badges, large watchmaker photo
- `ServicesGrid.tsx` — 9 service cards with Lucide icons, hover elevation
- `WhyChooseUs.tsx` — 4-column feature strip
- `ProcessTimeline.tsx` — 5 animated steps (Inspection → Delivery)
- `FeatureSplit.tsx` — split workshop photo + craftsmanship copy + callouts
- `StatsCounters.tsx` — animated counters (15+, 10,000+, 98%, 12mo)
- `BeforeAfter.tsx` — interactive drag comparison slider (custom, no extra deps)
- `Testimonials.tsx` — modern review cards
- `FAQ.tsx` — shadcn Accordion
- `BookingForm.tsx` — full form (name, phone, email, brand, model, problem, image upload, preferred date) — client-side only, shows toast on submit
- `ContactBlock.tsx` — map placeholder iframe, address/phone/email/hours, LINE + Messenger buttons
- `Section.tsx`, `Container.tsx`, `Reveal.tsx` (Framer Motion fade-up wrapper)

Home page composes: Hero → ServicesGrid (preview) → WhyChooseUs → ProcessTimeline → FeatureSplit → StatsCounters → BeforeAfter → Testimonials → FAQ → BookingForm CTA → Contact preview. Sub-routes reuse relevant components as standalone pages with their own hero-lite intros.

## Imagery

Generate with imagegen (fast tier, jpg, saved under `src/assets/`):

- `watchmaker-hero.jpg` — pro watchmaker at bench, loupe, mechanical watch, natural light
- `workshop.jpg` — organized workshop, tools, tweezers, movement parts
- `before-1.jpg` / `after-1.jpg` — scratched vs polished case
- `before-2.jpg` / `after-2.jpg` — cloudy vs new crystal
- `before-3.jpg` / `after-3.jpg` — dirty movement vs serviced

Upload each via `lovable-assets create` and reference through `.asset.json` pointers.

## Animations

- `framer-motion` installed via `bun add framer-motion`
- `Reveal` wrapper: fade + translateY on `whileInView`, once:true, viewport margin
- Hero: staggered fade-in
- Counters: `useInView` + `useMotionValue` tween to target
- Timeline: sequential reveal per step with connecting line growth
- Cards: hover `y: -4` + shadow bump
- Buttons: subtle scale on tap
- Header: `AnimatePresence` for background transition

## Head Metadata (per route)

Each route sets unique title/description/og:title/og:description. Contact route sets og:image to the workshop photo. Root sets brand-appropriate defaults (title: "Thirakan — Luxury Watch Repair & Restoration" placeholder brand; description mentions certified watchmakers, warranty, precision).

## Tech Details

- Dependencies to add: `framer-motion`
- Reuse existing shadcn components: Button, Card, Accordion, Input, Textarea, Label, Select, Sonner (toasts)
- Booking form uses `react-hook-form` + `zod` (already in stack per shadcn defaults) — form is UI-only, submit shows success toast. No backend wiring.
- Fully responsive; mobile nav is a Sheet drawer.
- All colors via semantic tokens, no hardcoded hex in components.

## Out of Scope

- No backend, no Lovable Cloud, no auth, no real form submission, no real map API (embed static iframe or styled placeholder).
- No dark mode toggle (site is light-mode premium).
- No e-commerce.

Deliverable: cohesive premium marketing site matching the spec, with all listed sections implemented and animated.

The website should feel like a luxury editorial experience rather than a corporate business website.

Use large immersive imagery.

Alternating full-width storytelling sections.

Oversized typography.

Generous whitespace.

Subtle parallax.

Luxury scroll animations.

Magazine-style layouts.

Image-first design.

Avoid generic SaaS layouts or dashboard-style cards.

The experience should resemble the craftsmanship and storytelling quality of premium Swiss watch brands while remaining completely original.