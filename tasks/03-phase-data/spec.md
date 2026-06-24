# 03-phase-data

## Goal

Single shared data module for four cycle phases — avoids duplicating content between home and science pages.

## Subtasks

- [ ] Extract home phase shape from `PhaseSection.jsx` (headline, symptoms, keyIngredients)
- [ ] Extract science phase shape from `Science.jsx` (hormone, mission, body, studies, ingredients)
- [ ] Export phase colors/icons/days consistently across both shapes

## UI reference

- `ref-phase-drain.png` — Drain: coral `#FF6B6B`, bgLight `#FFF0F0`, emoji 🌑
- `ref-phase-peak-science.png` — Peak: flamingo `#FF6EB4`, bgLight `#FFF0F8`, emoji 🌕

### Must match

| Phase | color | bgLight | days |
|-------|-------|---------|------|
| The Drain | `#FF6B6B` | `#FFF0F0` | 1–7 |
| The Rise | `#6DB589` | `#F0FAF3` | 8–13 |
| The Peak | `#FF6EB4` | `#FFF0F8` | 14–21 |
| The Crash | `#A78BCA` | `#F5F0FA` | 22–28 |

- Comparison rows for Why section: 5 differentiators × Flo-Living / Thorne / Flourish booleans

## Constraints

- Port from: `base44/src/components/home/PhaseSection.jsx`, `base44/src/pages/Science.jsx`, `base44/src/components/home/WhySection.jsx`
- Use: plain JS/TS module exports
- Avoid: fetching phase data from API

## Definition of done

- [ ] One import provides all four phases for home + science consumers
- [ ] Phase tab labels match video: emoji + name (e.g. `🌑 The Drain`)
- [ ] Comparison differentiator labels match Base44 exactly
- [ ] No React in data file

## Open questions

- Home right column label reads `Symptomes addressed` (typo) in Base44 — match typo or fix to `Symptoms addressed`?
