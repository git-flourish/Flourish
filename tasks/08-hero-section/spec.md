# 08-hero-section

## Goal

Full-viewport home hero with orbital rings, outlined watermark, CTAs, and mini social proof.

## Subtasks

- [ ] Background: 4 orbital rings + giant outlined `FLOURISH` stroke watermark
- [ ] Content stack: eyebrow, wordmark, taglines, primary + secondary CTA, avatar row
- [ ] Scroll cue: bottom vertical line with bounce animation
- [ ] Wire waitlist modal + `sourcePage="homepage"`

## UI reference

- `ref-hero-full.png` — centered hero, nav visible, ticker at bottom edge
- `ref-hero-typography.png` — type scale and CTA layout detail

### Must match

- Section: `min-h-screen bg-cream flex flex-col items-center justify-center`
- Eyebrow: `THE FIRST CYCLE-SYNCED SUPPLEMENT SYSTEM` — `text-xs uppercase tracking-[0.3em] text-mulberry/60`
- Wordmark: `.flourish-wordmark text-[clamp(5rem,16vw,14rem)]` flamingo
- Tagline: Playfair bold mulberry `Built for a woman's cycle.`
- Body: sans `text-mulberry/70 max-w-xl` — four phases copy from Base44
- Primary CTA: `pulse-cta bg-flamingo rounded-full py-4 px-10 shadow-lg shadow-flamingo/30`
- Secondary: `See how it works` + ArrowDown → `#how-it-works`
- Avatars: 4 overlapping 32px circles (flamingo, lavender, coral, sage borders cream)
- Social proof: `1,200+ women` flamingo semibold + `already on the waitlist`
- Stagger: `.fade-up` delays 0.1s–0.65s on content blocks
- Watermark stroke: `2px rgba(255,110,180,0.1)` transparent fill

## Constraints

- Port from: `base44/src/components/home/HeroSection.jsx`
- Depends on: 05-waitlist-modal
- Avoid: hero background photos (none in prototype)

## Definition of done

- [ ] Hero fills viewport below fixed nav
- [ ] Fade-up sequence runs on load
- [ ] Join Waitlist opens modal
- [ ] Secondary link scrolls to phase section
- [ ] Watermark + rings visible but non-interactive
