# 06-navbar

## Goal

Fixed site header with scroll shrink, active route styling, waitlist CTA, and mobile menu.

## Subtasks

- [ ] Desktop nav: logo, Home / Our Science / How It Works, Join Waitlist button
- [ ] Scroll state: transparent → `bg-cream/90 backdrop-blur-md shadow-sm` after 40px
- [ ] Mobile: hamburger toggles full-width menu with same links + CTA
- [ ] Wire `WaitlistModal` with `sourcePage="homepage"`

## UI reference

- `ref-nav-home.png` — Home link flamingo; others mulberry/70; transparent header over hero
- `ref-nav-science-active.png` — on `/science`, "Our Science" flamingo; Home mulberry/70

### Must match

- Logo: `font-flourish text-2xl font-black text-flamingo` → `/`
- Nav links: `text-sm font-medium tracking-wide`; active route flamingo; `.nav-link` underline hover
- "How It Works": `href="#how-it-works"` (same-page anchor on home)
- CTA: `pulse-cta bg-flamingo text-cream rounded-full py-2.5 px-6 text-sm font-semibold`
- Scrolled padding: `py-5` → `py-3`
- Mobile menu: `bg-cream/95 backdrop-blur-md border-t border-flamingo/10`
- z-index: `z-40`; fixed top

## Constraints

- Port from: `base44/src/components/Navbar.jsx`
- Depends on: 05-waitlist-modal
- Avoid: adding nav items not in Base44/video

## Definition of done

- [ ] Active link reflects current route (`/` vs `/science`)
- [ ] Join Waitlist opens modal on desktop and mobile
- [ ] Header background transitions on scroll
- [ ] Mobile menu closes on link click
- [ ] `#how-it-works` scrolls to Phase section on home

## Open questions

- Video never shows mobile breakpoint — implement from Base44; verify against real device
