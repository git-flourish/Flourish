# 19-science-page

## Goal

Compose full `/science` page from science sections + shared footer.

## Subtasks

- [ ] Stack: Navbar → Hero+Ticker → Principles → Phase deep-dive → Timeline → CTA → Footer
- [ ] Page wrapper `min-h-screen bg-cream`; manage waitlist modal state at page level (per Base44)

## UI reference

- `ref-science-page-top.png` — hero + start of principles
- `ref-science-page-mid.png` — phase deep-dive band

### Must match

- Section order from Base44 `Science.jsx`
- Nav shows Our Science as active (flamingo)
- Single page-level `WaitlistModal` for science CTA (Base44 pattern)

## Constraints

- Port from: `base44/src/pages/Science.jsx`
- Depends on: 07, 14, 15, 16, 17, 18, 06

## Definition of done

- [ ] Full science page scroll matches video ~3:00–3:45 plus Base44 sections not in video
- [ ] Phase tabs work in deep-dive section
- [ ] Footer marquee matches home footer
- [ ] No duplicate nav/footer instances
