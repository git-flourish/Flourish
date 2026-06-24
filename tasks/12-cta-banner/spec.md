# 12-cta-banner

## Goal

Flamingo full-width CTA band before footer on home page.

## Subtasks

- [ ] Orbital ring decorations on pink background
- [ ] Copy stack + cream pill button opening waitlist modal

## UI reference

- `ref-cta-banner.png` — pink band, cream headline, inverted CTA button

### Must match

- Section: `bg-flamingo py-24 md:py-32 relative overflow-hidden`
- Eyebrow: `COMING SOON` — `text-cream/60 text-xs uppercase tracking-[0.3em]`
- H2: cream Playfair `text-[clamp(2.5rem,8vw,7rem)] font-black` — "Women finally get / what they need."
- Body: `text-cream/80 max-w-lg mx-auto`
- Button: `bg-cream text-flamingo rounded-full py-4 px-12 shadow-xl` + ArrowRight hover translate
- Hover: `hover:bg-mulberry hover:text-cream hover:scale-105`
- Fine print: `FREE TO JOIN · NO CREDIT CARD REQUIRED` — `text-cream/50 text-xs uppercase tracking-widest`
- Orbital rings: 600px + 900px cream/10 and cream/5 borders centered

## Constraints

- Port from: `base44/src/components/home/CtaBanner.jsx`
- Depends on: 02-scroll-reveal, 05-waitlist-modal

## Definition of done

- [ ] Button opens waitlist modal
- [ ] Typography matches video at 1280px and 390px widths
- [ ] Rings do not intercept clicks
