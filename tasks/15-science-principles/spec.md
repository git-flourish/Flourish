# 15-science-principles

## Goal

Four-card grid stating Flourish scientific principles on cream background.

## Subtasks

- [ ] Section heading centered
- [ ] 2×2 / 4-col responsive grid of principle cards with lucide icons

## UI reference

- `ref-principles-grid.png` — "Our scientific principles" + four white cards

### Must match

- Section: `py-24 bg-cream`; `max-w-7xl mx-auto px-6`
- H2: Playfair `text-[clamp(2rem,5vw,4rem)] font-black text-mulberry`
- Cards: `bg-white/50 rounded-2xl p-7 border border-flamingo/10 h-full`
- Icon container: `w-10 h-10 rounded-full bg-flamingo/10`; icon flamingo 20px
- Principles (icon + title + body): Evidence First, Bioavailability by Design, Cycle Intelligence, Clean & Vegan — copy from Base44
- ScrollReveal stagger: `delay={i * 0.1}`

## Constraints

- Port from: `base44/src/pages/Science.jsx` (principles block)
- Use: lucide FlaskConical, Leaf, Zap, Shield
- Depends on: 02-scroll-reveal

## Definition of done

- [ ] Four cards equal height on lg breakpoint
- [ ] Icon + title + body match Base44 text exactly
- [ ] Section sits below ticker on science page
