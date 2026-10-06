# Artin Karimi — portfolio

An English-language portfolio for Artin Karimi, a full-stack developer with strong React and Next.js experience and a reviewed AI-assisted development workflow. Built with Next.js 16 App Router, React, TypeScript, Tailwind CSS 4, a dedicated CSS visual layer, and one root Lenis instance for desktop wheel smoothing. The site exports static files to `out/`; touch scrolling remains native and the only persistent client behavior is navigation plus the lightweight smooth-scroll provider.

## Run and validate

```sh
npm ci
npm run dev
npm run sourcecheck
npm run check
```

`npm run check` runs source integrity checks, ESLint, TypeScript, the static production build, and Playwright/axe QA in sequence. `npm run qa` can also be run separately after `npm run build`; it serves `out/`, prefers Playwright Chromium, and falls back to Microsoft Edge when available. It writes screenshots and a machine-readable result to `artifacts/`.

For an actual public release, set the final HTTPS origin and run `NEXT_PUBLIC_SITE_URL=https://portfolio.yourdomain.com npm run release`. The release command refuses to proceed without an explicit production origin.

## Content map

| Content | Source |
| --- | --- |
| Identity, bio, links, portrait, résumé path, availability | `src/data/profile.ts` |
| Page navigation, headings, services, stack, contact copy | `src/data/site.ts` |
| Case studies | `src/data/projects.ts` |
| Development process | `src/data/process.ts` |
| Experience | `src/data/experience.ts` |
| AI workflow and tools | `src/data/ai-tools.ts` |
| Collaboration invitation | `src/data/collaboration.ts` |

The featured work includes Jazireh, Innoverse / ViaX Code Arena, and Elarven. Each project record produces a static `/work/[slug]/` page and sitemap entry. Elarven is described as a frontend concept with local demonstration data; its planned backend and real reservation handling are not represented as existing features.

The displayed portrait and every project raster shipped by the site are WebP assets. The unused JPEG portrait source is intentionally excluded from the production package. A résumé download appears automatically if `public/resume.pdf` is added; until then, no résumé CTA is rendered. Project visuals live in `public/projects/`.

## Architecture and quality

Page sections remain Server Components. The mobile navigation, reusable `SmoothScroll` provider, and tiny `ScrollEffects` observer are the intentional client boundaries. The menu supports Escape, focus cycling, navigation dismissal, scroll locking, and Lenis stop/start synchronization. The process section is a numbered editorial sequence. AI examples use native `<details>` disclosures. Motion respects reduced-motion preferences. The visual polish layer lives in `src/app/polish.css`. Continuous scroll-linked timelines were deliberately removed in the final performance pass; cinematic entrances now run once through one shared `IntersectionObserver` and then stop doing animation work. Lenis is initialized once at the root; no GSAP/Framer/WebGL layer or duplicate animation loop is shipped.

Metadata, robots, sitemap, and canonical URLs use `profile.siteUrl`. Set `NEXT_PUBLIC_SITE_URL` when building for a different public origin. Static export has no image transformation server, so locally optimized images are used with `unoptimized` enabled.

See `PRODUCTION-AUDIT-2026-10-06.md` for the current Lenis/responsive audit, `VALIDATION.md` for the earlier release audit, and `PERFORMANCE.md` for the Phase 4 before/after measurements and code-quality verdict. The Innoverse silver medal is intentionally omitted until its exact award designation and supporting evidence are confirmed.
