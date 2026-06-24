# 18-science-cta

## Goal

Flamingo CTA band at bottom of science page before footer.

## Subtasks

- [ ] Headline stack + cream waitlist button opening modal (`sourcePage="science"`)
- [ ] Decorative orbital ring bottom-left

## UI reference

- `ref-science-cta-style.png` — same visual language as home CTA (video shows home variant; science copy differs)

### Must match (Base44 science CTA)

- Section: `py-20 bg-flamingo relative overflow-hidden`
- H2: cream Playfair `text-[clamp(2.5rem,7vw,6rem)] font-black` — lines: "Science-backed." / "Cycle-synced." / "Finally."
- Button: `bg-cream text-flamingo rounded-full py-4 px-12` — label `Join the Waitlist` + ArrowRight
- Hover: `hover:bg-mulberry hover:text-cream hover:scale-105`
- Ring: `400px border-cream/10` offset bottom-left
- Modal: `sourcePage="science"`

## Constraints

- Port from: `base44/src/pages/Science.jsx` (bottom CTA block)
- Depends on: 02-scroll-reveal, 05-waitlist-modal

## Definition of done

- [ ] Button opens waitlist modal with science source tag
- [ ] Copy differs from home CTA banner (not interchangeable)
- [ ] Visual weight matches home CTA band

## Open questions

- Science CTA **not scrolled to** in overview video — verify copy against Base44 only
