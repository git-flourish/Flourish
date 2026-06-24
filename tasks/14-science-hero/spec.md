# 14-science-hero

## Goal

Science page hero intro with large split headline and supporting copy.

## Subtasks

- [ ] Hero section with orbital ring decoration top-right
- [ ] Render `ScienceTicker` immediately below hero

## UI reference

- `ref-science-hero.png` — left-aligned hero, "The science / of your cycle."

### Must match

- Padding: `pt-40 pb-20` (clears fixed nav)
- Eyebrow: `THE FLOURISH STANDARD` — `text-xs uppercase tracking-[0.3em] text-mulberry/50`
- H1: Playfair `text-[clamp(3rem,9vw,8rem)] font-black text-mulberry`
- Line 2 span: `text-flamingo italic` — "of your cycle."
- Body: `text-lg text-mulberry/60 max-w-2xl leading-relaxed` — 150+ trials copy
- Ring: `600px border-flamingo/10` circle offset top-right
- Container: `max-w-5xl mx-auto px-6`

## Constraints

- Port from: `base44/src/pages/Science.jsx` (hero block only)
- Depends on: 02-scroll-reveal, 04-science-ticker, 06-navbar

## Definition of done

- [ ] `/science` top matches video frame at ~3:00
- [ ] Ticker renders directly under hero text block
- [ ] ScrollReveal wraps hero content
