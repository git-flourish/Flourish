# 16-science-phase-deep-dive

## Goal

Mulberry-band phase explorer with clinical copy, ingredient tags, and research citations.

## Subtasks

- [ ] Section header on mulberry bg with phase tab pills
- [ ] Two-column phase card: editorial left + ingredients/studies right
- [ ] Tab switch updates card bg (`bgLight`) and accent color

## UI reference

- `ref-phase-selector.png` — mulberry section header + four tabs
- `ref-phase-drain-card.png` — Drain card with hormone pull-quote + research list
- `ref-phase-crash-active.png` — Crash tab active, lavender accents

### Must match

- Section: `py-24 bg-mulberry`; large cream/5 orbital ring decoration
- Eyebrow: `FOUR FORMULAS` flamingo; H2 cream Playfair
- Subtext: `text-cream/60 max-w-xl mx-auto`
- Tabs on dark bg: active = phase color fill + cream text + scale 1.05; inactive = transparent + `borderColor: color+50`
- Card: `rounded-3xl overflow-hidden`; outer bg = `phase.bgLight`
- Left: emoji + name (phase color) + phase/days uppercase; border-l-4 pull quote; mission label + Playfair mission headline; body `text-mulberry/70`
- Right: bg `phase.color + "12"`; ingredient pills `phase.color + "20"`; study cards `rgba(250,240,230,0.7)` rounded-xl
- All four phases switch content without page reload

## Constraints

- Port from: `base44/src/pages/Science.jsx` (phase deep-dive block)
- Data from: 03-phase-data (science fields)
- Depends on: 02-scroll-reveal, 03-phase-data

## Definition of done

- [ ] Each phase shows 6 ingredients + 3 studies from data module
- [ ] Active tab styling matches video for Drain and Crash
- [ ] Card readable on mobile (stacks to single column at lg breakpoint)
