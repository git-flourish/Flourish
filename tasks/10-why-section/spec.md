# 10-why-section

## Goal

Mulberry comparison band explaining Flourish vs Flo-Living vs Thorne.

## Subtasks

- [ ] Left column: eyebrow, headline, market stat paragraph
- [ ] Right column: 4-column comparison grid with check/X icons + footer badge

## UI reference

- `ref-why-comparison.png` — mulberry bg, cream text, comparison table right

### Must match

- Section: `py-24 md:py-32 bg-mulberry`; orbital ring decoration top-right
- Eyebrow: `WHY FLOURISH` — flamingo, `tracking-[0.3em] text-xs uppercase`
- H2: cream Playfair; `different.` in flamingo italic
- Body: `text-cream/60 max-w-md`
- Table: `rounded-2xl border border-cream/10`; header row `bg-cream/5`
- Columns: blank | Flo-Living | Thorne | Flourish (flamingo label)
- Checks: sage for competitors; flamingo CheckCircle for Flourish column
- X icons: `text-cream/20`
- Footer row: `bg-flamingo/20` — `Only all-in-one solution ✦`

## Constraints

- Port from: `base44/src/components/home/WhySection.jsx`
- Data from: 03-phase-data (differentiators array)
- Use: `lucide-react` CheckCircle2, X

## Definition of done

- [ ] All 5 rows match Base44 boolean matrix
- [ ] Readable on md+ two-column; stacks on mobile
- [ ] ScrollReveal on left and right blocks with 0.15s delay offset
