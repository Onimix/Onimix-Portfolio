# Onimix Tech

The portfolio site of **Onimix Tech** — AI developer, creative developer, and technology entrepreneur. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**Live site:** _add your Vercel URL here once deployed_

---

## Features

- Next.js 14 App Router + TypeScript, strict mode
- Tailwind CSS with a custom design-token system (`tailwind.config.ts`)
- Framer Motion: scroll reveals, magnetic buttons, 3D project card tilt, animated skill bars, page-load screen, scroll progress bar
- All 13 sections from the brief: Home, About, Services, Skills, Technologies, Tools, Process, Projects, Gallery, Experience, Achievements, Testimonials, Contact
- Drop-in video backgrounds with automatic graceful fallback to a static image if no video is present yet
- Fully responsive: mobile, tablet, laptop, desktop, large monitors
- SEO: metadata, Open Graph, Twitter cards, `site.webmanifest`
- Accessibility floor: visible keyboard focus, `prefers-reduced-motion` respected globally
- Centralized branding/content config (`src/lib/site-config.ts`, `src/lib/projects.ts`) — no branding strings scattered through components

## Folder structure

```
src/
  app/
    layout.tsx        → root layout, fonts, metadata/SEO
    page.tsx           → assembles all sections
    globals.css         → design tokens, base styles, grid/scanline utilities
  components/
    layout/             → Navbar, Footer
    sections/           → Hero, About, Services, Skills, Projects, Contact
    ui/                  → reusable primitives (buttons, cards, reveals, video bg...)
  lib/
    site-config.ts       → name, tagline, nav, social links — edit this first
    projects.ts          → your project data, separate from the component
public/
  videos/                → drop hero.mp4 etc. here (see public/videos/README.md)
  images/projects/        → drop project screenshots here
```

## Getting started

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization guide

**1. Branding & content** — edit `src/lib/site-config.ts`: your name, tagline, roles, nav links, social links, location. This one file feeds the navbar, footer, contact section, and page metadata.

**2. Projects** — edit `src/lib/projects.ts`. Add a screenshot to `public/images/projects/`, then point `image` at it. Set `featured: true` on your best project to show the badge. One entry (`nairaroot`) is a placeholder — fill in the real description and stack.

**2b. Testimonials** — `src/lib/testimonials.ts` currently holds placeholder quotes, not real ones (fabricating client quotes isn't something I'll do). Replace with real quotes before launch, or delete the section from `page.tsx` if you don't have any yet.

**3. Videos** — drop files into `public/videos/` using the filenames noted in that folder's README (e.g. `hero.mp4`). The `<VideoBackground />` component picks them up automatically; until then it shows the fallback image.

**4. Colors & type** — the whole palette lives in `tailwind.config.ts` under `theme.extend.colors` (`base`, `signal`, `data`, `ink`). Fonts are loaded in `src/app/layout.tsx` via `next/font/google`.

**5. Contact form** — `src/components/ui/ContactForm.tsx` is currently a frontend-only stub (it simulates sending). Wire it to a real backend before launch: either add a Next.js API route at `src/app/api/contact/route.ts` calling an email service (Resend, SendGrid), or swap the `fetch` call for a form service like Formspree.

## Deployment

**Vercel (recommended):**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: Next.js (auto-detected). No env vars required unless you wire the contact form.
4. Deploy. Update `url` in `site-config.ts` to your live domain for correct SEO/OG tags, then redeploy.

**GitHub:**

```bash
git add .
git commit -m "Rebuild portfolio as Onimix Tech"
git push origin main
```

---

Built by Onimix Tech.
