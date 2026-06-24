# 05-waitlist-modal

## Goal

Early-access waitlist overlay with form + success states, opened from nav and CTAs site-wide.

## Subtasks

- [ ] Build modal shell: mulberry/60 backdrop blur, centered panel, `split-reveal` entry
- [ ] Form step: first name (optional), email, validation, submit loading spinner
- [ ] Success step: sparkles icon, personalized welcome, close resets state

## UI reference

- `ref-modal-form.png` — flamingo panel, cream inputs with bottom borders, cream CTA pill
- `ref-modal-backdrop.png` — blurred hero visible behind overlay

### Must match

- Panel: `bg-flamingo rounded-2xl p-8 md:p-12 shadow-2xl max-w-lg`
- Eyebrow: `EARLY ACCESS` — `text-xs uppercase tracking-widest text-cream/80`
- Title: `Join the Inner Circle` — Playfair 4xl/5xl black cream
- Inputs: transparent, `border-b-2 border-cream/40`, cream text, `text-lg py-3`
- Submit: full-width cream pill, flamingo text, arrow icon, hover `bg-flamingo-light`
- Footer disclaimer: `text-cream/50 text-xs` centered
- Close: top-right X `text-cream/70`
- Decorative: `orbital-ring w-64 h-64 -top-16 -right-16 opacity-30`
- Backdrop click closes; escape key closes

## Constraints

- Port from: `base44/src/components/WaitlistModal.jsx`
- API: stub or port `base44Client` + `WaitlistEntry` entity when backend ready
- Avoid: browser `alert()` for errors; inline error text only

## Definition of done

- [ ] Opens/closes from controlled `isOpen` prop
- [ ] Invalid email shows inline error without submit
- [ ] Valid submit reaches success step (mock API OK for UI task)
- [ ] Close resets to form step
- [ ] `sourcePage` prop accepted for future analytics

## Open questions

- Video shows form state only — success step (`You're in!`) not captured; match Base44 success UI from code
- Duplicate email handling: Base44 shows success silently — confirm desired UX
