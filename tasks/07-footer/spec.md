# 07-footer

## Goal

Site footer with animated FLOURISH marquee and legal/social links on flamingo background.

## Subtasks

- [ ] Marquee row: alternating cream full/30% opacity giant wordmark, `marquee-track` 18s
- [ ] Bottom bar: copyright, nav links, Instagram + Twitter icons

## UI reference

- `ref-footer-marquee.png` — pink footer, oversized FLOURISH text, cream copyright row

### Must match

- Footer bg: `bg-flamingo`
- Marquee text: `font-flourish text-[clamp(5rem,14vw,12rem)] font-black leading-none`
- Opacity alternation: even index `rgba(250,240,230,1)`, odd `rgba(250,240,230,0.3)`
- Marquee border: `border-b border-cream/20`; section `py-10`
- Copyright: `text-xs uppercase tracking-widest text-cream/60`
- Links: Home, Our Science, Privacy, Terms — `text-cream/70 hover:text-cream`
- Social: lucide Instagram + Twitter 18px
- Year: dynamic `© {year} Flourish Health, Inc.`

## Constraints

- Port from: `base44/src/components/Footer.jsx`
- Use: `react-router-dom` Link for internal routes; `#` placeholders for Privacy/Terms
- Avoid: real social URLs until provided

## Definition of done

- [ ] Marquee animates continuously without gap/jump
- [ ] All links present and styled per spec
- [ ] Footer sits flush after last page section (no cream gap)
