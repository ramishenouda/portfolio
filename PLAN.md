# Plan: Portfolio Full Modernization Rebuild

Rebuild from Next.js 13 Pages Router into a **Next.js 15 App Router** project with bold/creative design, animated 3D hero, timeline experience section, dark/light theme toggle, Framer Motion animations, strong SEO, and full accessibility. All content extracted into a central data layer.

---

## Phase 1: Foundation — Stack Upgrade & Scaffolding

1. **Migrate to Next.js 15 App Router** — Replace `pages/` with `app/` directory. Create `app/layout.tsx`, `app/page.tsx`.

2. **Upgrade all dependencies** — React 19, TypeScript 5.x, Tailwind v4, NextUI v2 (`@heroui/react`). **Replace GSAP with Framer Motion** (MIT license, React-idiomatic, native scroll animations).

3. **Dark/light theme system** — `next-themes` + CSS variables + Tailwind `darkMode: 'class'`. Theme toggle in navbar.

4. **Extract content to data layer** — Move all hardcoded content (jobs, projects, testimonials, skills) into typed files under `data/`. Adding a new project becomes a single-file edit.

5. **Reusable animation components** — `FadeIn`, `SlideIn`, `StaggerChildren` wrappers replacing all GSAP ScrollTrigger files.

**Verify**: `npm run build` passes, app renders, zero GSAP references.

---

## Phase 2: Bold & Creative Design System

6. **Typography** — Replace Poppins with **Inter** (body) + **Space Grotesk** (headings) via `next/font`.

7. **Color system** — Vibrant accent color, full dark + light palettes via CSS variables.

8. **UI primitives** — `SectionHeading`, `Badge`, `Button`, `Card` (glass effect + border glow) in `components/ui/`.

9. **Navbar redesign** — Glassmorphic blur, active section tracking, scroll progress bar, theme toggle, full-screen mobile overlay with staggered animation.

**Verify**: Components render correctly in both themes.

---

## Phase 3: Hero & Section Rebuilds

10. **3D animated hero** — `@react-three/fiber` + `@react-three/drei` for floating particles/geometric shapes. Bold animated text reveal, typewriter tagline, CTA buttons. Lazy-loaded with `ssr: false`.

11. **About Me** — Two-column: photo with decorative border + bio with highlighted keywords. Parallax on scroll.

12. **Expertise** — Interactive categorized skill grid with icon tooltips and proficiency indicators.

13. **Experience timeline** _(new)_ — Vertical animated timeline that draws on scroll. Alternating left/right layout on desktop, company nodes, expandable descriptions.

14. **Projects** — Large-imagery showcase cards with tech badges, hover overlays, staggered reveal.

15. **Testimonials** — Framer Motion `AnimatePresence` carousel with large quote marks, auto-play, crossfade.

16. **Contact** — Split layout: floating-label form (left) + contact info (right). Inline validation with smooth feedback.

**Verify**: All sections responsive (375px / 768px / 1440px), animations trigger correctly, hero loads fast.

---

## Phase 4: Performance, SEO & Accessibility

17. **SEO** — Next.js 15 Metadata API, OpenGraph/Twitter cards, JSON-LD Person schema, `app/sitemap.ts`, `app/robots.ts`.

18. **Performance** — Dynamic import 3D hero, `next/image` everywhere, code-split heavy components. Target **Lighthouse 90+**.

19. **Accessibility** — ARIA labels, keyboard navigation (navbar, carousel, form, timeline), skip-to-content link, WCAG AA contrast in both themes, focus-visible styles.

20. **Cleanup** — Remove `pages/`, all `*-animation.ts` files, empty CSS files, GSAP from package.json, update README.

**Verify**:

- Lighthouse 90+ on all four metrics
- Keyboard-only navigation through entire site
- Both themes pass color contrast checks
- `npm run build` — zero errors

---

## Key Files

| Action     | Files                                                                                                                                                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Modify** | `package.json`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `styles/globals.css`                                                                                                                                                       |
| **Create** | `app/layout.tsx`, `app/page.tsx`, `app/providers.tsx`, `app/sitemap.ts`, `app/robots.ts`, `data/*.ts`, `types/index.ts`, `components/ui/*`, `components/animations/*`, `components/intro/hero-scene.tsx`, `components/experience/timeline-item.tsx` |
| **Delete** | `pages/` (all), 6 `*-animation.ts` files, empty CSS (`navbar.css`, `expertise.css`)                                                                                                                                                                 |

---

## Decisions Made

- **GSAP → Framer Motion** — MIT license, lighter, React-native scroll animation support
- **NextUI beta → HeroUI v2** — Beta is unmaintained; v2 is stable with Tailwind
- **Three.js hero only** — 3D scoped to hero to protect performance, dynamically imported
- **Data layer** — Content separated from components for easy updates

## Scope Excluded

- Blog, CMS integration, i18n, API routes, analytics dashboard (can add later)
