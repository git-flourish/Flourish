# 17-science-timeline

## Goal

"The 28-day journey" horizontal timeline linking all four phases on cream background.

## Subtasks

- [ ] Centered heading + subcopy
- [ ] Desktop: gradient line + 4 columns with phase dots, days, names
- [ ] Mobile: stacked column layout

## UI reference

- `ref-science-mid-scroll.png` — partial science page scroll context (timeline not isolated in video)

### Must match (from Base44 — video not shown)

- Section: `py-24 bg-cream`; `max-w-5xl mx-auto px-6`
- H2: Playfair mulberry `The 28-day journey`
- Subcopy: `text-mulberry/60 max-w-lg mx-auto`
- Timeline line (md+): `h-px bg-gradient-to-r from-coral via-sage via-flamingo to-lavender opacity-40`
- Dots: 48px circles, `background: color+20`, `border: 2px solid color`, emoji centered
- Labels: days uppercase tracking-widest; name Playfair in phase color; phase name below

## Constraints

- Port from: `base44/src/pages/Science.jsx` (timeline block)
- Data from: 03-phase-data
- Depends on: 02-scroll-reveal, 03-phase-data

## Definition of done

- [ ] Four phases appear in Drain → Rise → Peak → Crash order
- [ ] Gradient line connects dots on md+ viewports
- [ ] Matches Base44 layout pixel-close at 1280px

## Open questions

- Timeline section **not shown** in overview video — treat Base44 as source of truth; confirm with stakeholder if video is incomplete
