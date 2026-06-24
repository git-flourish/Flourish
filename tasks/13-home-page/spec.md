# 13-home-page

## Goal

Compose full home page (`/`) from shared layout + home sections in scroll order.

## Subtasks

- [ ] Assemble sections: Navbar → Hero → Ticker → Phase → Why → SocialProof → CtaBanner → Footer
- [ ] Ensure single cream page wrapper `min-h-screen bg-cream`

## UI reference

- `ref-home-scroll-anchor.png` — hero through ticker into THE SYSTEM
- `ref-home-phase-to-why.png` — phase section bottom into why band transition

### Must match

- Section order identical to Base44 `Home.jsx`
- No duplicate waitlist modals conflicting (each section may own modal instance per Base44 pattern — OK)
- Smooth anchor scroll from hero/nav to `#how-it-works`

## Constraints

- Port from: `base44/src/pages/Home.jsx`
- Depends on: 04, 06, 07, 08, 09, 10, 11, 12

## Definition of done

- [ ] Full home scroll matches video walkthrough (~0:10–2:50)
- [ ] No horizontal overflow at 375px and 1440px
- [ ] All waitlist CTAs functional
- [ ] Lighthouse: no layout shift when nav becomes opaque on scroll
