# 00-foundation

## Goal

Establish Flourish design tokens, global styles, and font loading — single source of truth for all later tasks.

## Subtasks

- [ ] Port brand CSS variables + utility classes from Base44 `index.css`
- [ ] Port Tailwind theme extensions (colors, fonts, safelist) from `tailwind.config.js`
- [ ] Load Google Fonts in `index.html` (Playfair Display 700/900 + italic 700; Plus Jakarta Sans 300–600)

## UI reference

- `ref-tokens-hero.png` — cream page, flamingo accents, mulberry body text, serif/sans pairing
- `ref-tokens-ticker.png` — mulberry ticker bar, cream text, flamingo ✦ separators

### Must match

| Token | Value |
|-------|-------|
| cream | `#FAF0E6` |
| flamingo | `#FF6EB4` |
| mulberry | `#4A354A` |
| coral | `#FF6B6B` |
| sage | `#6DB589` |
| lavender | `#A78BCA` |
| flamingo-light | `#FFD6ED` |
| Body bg | cream; body text mulberry |
| Display font | Playfair Display — `.font-flourish`, `.flourish-wordmark` |
| UI font | Plus Jakarta Sans — default sans |
| Radius | `--radius: 0.5rem` |
| Scrollbar | 6px; track cream; thumb flamingo |
| Animations | `marquee` 18s, `ticker` 20s, `flamingo-pulse` 2.5s, `fadeUp` 0.7s, `splitOpen` 0.6s |
| Utilities | `.orbital-ring`, `.glass-form`, `.phase-card`, `.nav-link`, `.pulse-cta`, `.marquee-track`, `.ticker-track` |

## Constraints

- Port from: `base44/src/index.css`, `base44/tailwind.config.js`, `base44/index.html`
- Use: Tailwind 3, `tailwindcss-animate`, PostCSS
- Avoid: copying all shadcn/ui tokens as primary brand colors; shadcn HSL vars stay for future form primitives only

## Definition of done

- [ ] `npm run dev` shows cream background and correct fonts on a blank page
- [ ] Tailwind classes `bg-cream`, `text-flamingo`, `font-flourish` resolve to spec values
- [ ] Marquee/ticker keyframes run when classes applied to a test element
- [ ] No hard-coded duplicate hex values outside token files (except phase-specific inline colors in data-driven components)
