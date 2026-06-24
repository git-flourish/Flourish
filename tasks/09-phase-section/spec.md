# 09-phase-section

## Goal

Home `#how-it-works` interactive phase explorer with tab pills and two-column detail card.

## Subtasks

- [ ] Section header + four phase tab pills (active = filled phase color, scale 1.05)
- [ ] Two-column card: left quote/symptoms tags; right numbered symptom list + `0X of 4`
- [ ] Bottom CTA opens waitlist modal

## UI reference

- `ref-phase-header.png` — "Four phases. Four formulas." heading + tab row
- `ref-phase-peak-active.png` — Peak tab active, pink card bg `#FFF0F8`
- `ref-phase-drain-active.png` — Drain active, coral styling

### Must match

- Section id: `how-it-works`; padding `py-24 md:py-32`
- Header eyebrow: `THE SYSTEM`; H2 mulberry + flamingo span on "Four formulas."
- Tabs: `rounded-full border-2 px-5 py-2.5 text-sm font-semibold`; inactive border `color+60`
- Card: `rounded-3xl`; bg = phase `bgLight`; right column bg `phase.color + "15"`
- Headline quoted in Playfair: e.g. `"Rest is not weakness."`
- Symptom pills: `text-xs font-medium px-3 py-1 rounded-full` phase color 20% bg
- Right label: `Symptomes addressed` (per Base44)
- Number badges: 32px circles, phase color bg, cream number
- Giant phase index: Playfair `text-[6rem] opacity-10` + `of 4`
- Bottom copy + flamingo waitlist button centered

## Constraints

- Port from: `base44/src/components/home/PhaseSection.jsx`
- Data from: 03-phase-data
- Depends on: 02-scroll-reveal, 05-waitlist-modal

## Definition of done

- [ ] Clicking each tab swaps card content with transition
- [ ] All four phases render correct colors/copy
- [ ] Section reachable via nav `#how-it-works` anchor
- [ ] ScrollReveal wraps header, tabs, card, bottom CTA
