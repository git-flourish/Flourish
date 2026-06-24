# 01-app-shell

## Goal

Wire app entry, routing, and auth-loading splash so pages can mount independently.

## Subtasks

- [ ] Create `main.jsx` + root render with global CSS import
- [ ] Create `App.jsx` with `BrowserRouter`, `QueryClientProvider`, `AuthProvider`, `ScrollToTop`, `Toaster`
- [ ] Register routes: `/` → Home (stub), `/science` → Science (stub), `*` → PageNotFound

## UI reference

- `ref-routes-home.png` — `/` loads home layout shell
- `ref-routes-science.png` — `/science` loads science layout shell

### Must match

- Auth loading splash: full-viewport cream bg, centered `flourish` word in Playfair black weight, flamingo color (see Base44 `App.jsx` lines 17–26)
- Smooth scroll: `html { scroll-behavior: smooth }` (from 00)

## Constraints

- Port from: `base44/src/main.jsx`, `base44/src/App.jsx`, `base44/src/components/ScrollToTop.jsx`, `base44/src/lib/AuthContext.jsx`, `base44/src/lib/query-client.js`
- Use: `react-router-dom` v6, `@tanstack/react-query`
- Avoid: wiring Login/Register routes (not in video scope)

## Definition of done

- [ ] `/` and `/science` render placeholder divs with Navbar slot optional
- [ ] Unknown path shows PageNotFound
- [ ] Brief auth splash visible on load, then routes appear
- [ ] Scroll position resets on route change
