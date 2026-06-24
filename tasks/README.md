# Flourish rebuild tasks

Build order index. Status: `pending` until implemented.

| # | Task | Status | Depends on | Delivers |
|---|------|--------|------------|----------|
| 00 | [foundation](00-foundation/spec.md) | pending | — | Design tokens, global CSS, fonts |
| 01 | [app-shell](01-app-shell/spec.md) | pending | 00 | Router, providers, routes, auth splash |
| 02 | [scroll-reveal](02-scroll-reveal/spec.md) | pending | 00 | IntersectionObserver fade-up wrapper |
| 03 | [phase-data](03-phase-data/spec.md) | pending | 00 | Shared phase + comparison data module |
| 04 | [science-ticker](04-science-ticker/spec.md) | pending | 00 | Marquee ticker bar |
| 05 | [waitlist-modal](05-waitlist-modal/spec.md) | pending | 00 | Waitlist overlay + form states |
| 06 | [navbar](06-navbar/spec.md) | pending | 00, 05 | Fixed nav + mobile menu |
| 07 | [footer](07-footer/spec.md) | pending | 00 | Marquee wordmark + footer links |
| 08 | [hero-section](08-hero-section/spec.md) | pending | 00, 05 | Home hero |
| 09 | [phase-section](09-phase-section/spec.md) | pending | 02, 03, 05 | Home `#how-it-works` phase tabs |
| 10 | [why-section](10-why-section/spec.md) | pending | 02, 03 | Competitor comparison table |
| 11 | [social-proof](11-social-proof/spec.md) | pending | 02 | Stats row + testimonials |
| 12 | [cta-banner](12-cta-banner/spec.md) | pending | 02, 05 | Home bottom CTA band |
| 13 | [home-page](13-home-page/spec.md) | pending | 04–12, 06, 07 | `/` page composition |
| 14 | [science-hero](14-science-hero/spec.md) | pending | 02, 04, 06 | Science page hero |
| 15 | [science-principles](15-science-principles/spec.md) | pending | 02 | Four principle cards |
| 16 | [science-phase-deep-dive](16-science-phase-deep-dive/spec.md) | pending | 02, 03, 05 | Mulberry phase explorer |
| 17 | [science-timeline](17-science-timeline/spec.md) | pending | 02, 03 | 28-day journey timeline |
| 18 | [science-cta](18-science-cta/spec.md) | pending | 02, 05 | Science bottom CTA |
| 19 | [science-page](19-science-page/spec.md) | pending | 14–18, 07 | `/science` page composition |

## Source references

- Video walkthrough: `docs/overview.mp4` (~4.3 min; hero → home scroll → waitlist modal → science page)
- Base44 prototype: `base44/`

## Notes

- Auth pages (`Login`, `Register`, etc.) exist in Base44 but are **not routed** in `App.jsx` and **not shown** in the video — out of scope unless added later.
- `PageNotFound` uses generic slate styling; restyle only if requested after core pages ship.
