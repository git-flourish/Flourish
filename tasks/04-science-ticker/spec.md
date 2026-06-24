# 04-science-ticker

## Goal

Full-width scrolling credibility ticker reused below hero on home and science pages.

## Subtasks

- [ ] Build `ScienceTicker` with duplicated item list for seamless loop
- [ ] Apply `ticker-track` animation from 00-foundation

## UI reference

- `ref-ticker-home.png` — mulberry bar directly under home hero
- `ref-ticker-science.png` — same bar below science hero intro

### Must match

- Bg: `bg-mulberry`; vertical padding `py-4`
- Text: `text-xs font-semibold uppercase tracking-[0.2em] text-cream/70`
- Separator: flamingo `✦` between items
- Items (order): `150+ ARTICLES REVIEWED`, `PEER-REVIEWED FORMULAS`, `CYCLE-SYNCED PRECISION`, `CLINICALLY INFORMED`, `WATER-SOLUBLE BIOAVAILABILITY`, `VEGAN & ETHICALLY SOURCED`, `CRUELTY FREE`
- Animation: 20s linear infinite horizontal scroll

## Constraints

- Port from: `base44/src/components/home/ScienceTicker.jsx`
- Touch: `src/components/home/ScienceTicker.jsx` (+ import in pages later)
- Avoid: pausing animation on hover unless video shows it (it doesn't)

## Definition of done

- [ ] Ticker spans full viewport width with no horizontal page scroll
- [ ] Text legible at desktop; items repeat seamlessly
- [ ] Renders identically on cream pages above and below different heroes
