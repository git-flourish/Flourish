# 02-scroll-reveal

## Goal

Reusable scroll-triggered fade-up wrapper used across home and science sections.

## Subtasks

- [ ] Implement `ScrollReveal` with `IntersectionObserver` (threshold 0.15)
- [ ] Support `className` and `delay` props for staggered transitions

## UI reference

- `ref-scroll-section.png` — sections animate in as user scrolls to Phase header

### Must match

- Hidden: `opacity: 0`, `translateY(32px)`
- Visible: `opacity: 1`, `translateY(0)`
- Transition: `0.7s ease` on opacity + transform; delay via prop
- Unobserve after first reveal (no re-hide on scroll up)

## Constraints

- Port from: `base44/src/components/ScrollReveal.jsx`
- Use: React hooks only (no framer-motion required here)
- Avoid: adding animation library dependency for this component

## Definition of done

- [ ] Wrapper fades up once when ~15% visible
- [ ] `delay={0.1}` visibly staggers sibling cards in a test grid
- [ ] Works inside mulberry and cream sections without layout shift
