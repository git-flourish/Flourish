# 11-social-proof

## Goal

Stats row + three testimonial cards for early community social proof on home page.

## Subtasks

- [ ] Stats grid: 4 metrics in flamingo Playfair numbers
- [ ] Testimonial cards: quote mark, body, avatar initial, name + detail

## UI reference

- `ref-stats-row.png` — 2×2 / 4-col stats on cream with orbital decoration
- `ref-testimonials.png` — three cards with colored quote marks

### Must match

- Section: `py-24 md:py-32 bg-cream`; faint flamingo orbital ring top-left
- Stats numbers: `font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-flamingo`
- Stat labels: `text-sm text-mulberry/60 max-w-[140px]`
- Stats data: `+150`, `65%`, `$165B`, `4` with Base44 labels
- Header eyebrow: `EARLY COMMUNITY`
- H2: `Women are already` + italic flamingo `flourishing.`
- Cards: `bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-flamingo/10`
- Quote `"` at 5xl in card accent color (flamingo, lavender, sage)
- Avatar: 36px circle, cream initial, accent bg

## Constraints

- Port from: `base44/src/components/home/SocialProof.jsx`
- Depends on: 02-scroll-reveal

## Definition of done

- [ ] Four stats align centered on desktop, 2-col on mobile
- [ ] Three testimonials equal height in md grid
- [ ] ScrollReveal stagger 0.1s per card
