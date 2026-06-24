# Flourish — Multi-Agent Visual Build Loop

Prompt + setup for autonomously rebuilding the Flourish site in code from `tasks/*/spec.md`,
with a live localhost preview and an LLM validator that checks each page against its `ref-*.png`.

---

## Prerequisites (run once before the loop)

No new API secrets are required — the validator is a cursor-agent and rides on your Cursor login.

- **Git repo + branch** (the loop refuses to run outside git):
  ```bash
  cd /Users/yoadsimon/Documents/projects/personal/Flourish
  git init && git add -A && git commit -m "baseline: specs + loop harness"
  git checkout -b feat/flourish-rebuild
  ```
- **cursor-agent** installed and logged in (powers planner + executor + validator):
  ```bash
  cursor-agent --help   # confirm installed; sign in if prompted
  ```
- **Playwright + Chromium** (screenshots): `npx playwright install chromium`
- **coreutils** (macOS, for the loop's per-tick timeout): `brew install coreutils`
- **Base44 backend keys — optional.** Only needed if the rebuilt app must hit the real
  backend (e.g. live waitlist). For a UI-matching loop with static data + stubbed form,
  skip it. If needed, create `.env.local` with `VITE_BASE44_APP_ID` and
  `VITE_BASE44_APP_BASE_URL`.

---

## The prompt (paste to the agent)

**Build and run a multi-agent visual build loop for the Flourish website.**

**Read first (in order):** `loop/README.md`, `loop/loop.sh`, `loop/PROMPT.base.md`,
`loop/parse_plan.sh`, `loop/templates/*`, `.cursor/skills/plan-to-loop/SKILL.md`,
`.cursor/rules/loop-executor.mdc`, all `tasks/*/spec.md` (00–19) + `tasks/README.md`.
Do **not** watch the video — the specs and `tasks/*/ref-*.png` are the reference.

**Goal:** an autonomous loop with three cursor-agent roles per step —
**planner → executor → validator** — that rebuilds the site in code, where a step only
passes when the validator agent confirms the rendered page matches its `ref-*.png`.
A Vite dev server runs persistently so I can watch progress at `localhost:5173`.

**1. Scaffold the loop task** `loop/tasks/flourish-rebuild/` (use the `plan-to-loop`
skill format):

- `PLAN.md` — Phase 0 Foundation (task 00), Phase 1 Shared (01–07), Phase 2 Home (08–13),
  Phase 3 Science (14–19), preserving the dependency order in `tasks/README.md`. One
  **Step** per task folder, each `- [ ] **Done**`, with:
  - `**Work:**` condensed subtasks; reference the spec path + its `ref-*.png` and the
    `base44/` source it cites — don't repeat detail.
  - `**Done when:**` build/lint clean **and** validator returns `MATCH=yes` for the step's route.
  - `**Fast check:**` `bash loop/tasks/flourish-rebuild/scripts/check.sh <route> <ref-image> <spec-path>`
- `task.env`: `LABEL="Flourish rebuild"`, `BRANCH="feat/flourish-rebuild"`, `PLAN=...`,
  `MAX_ITERS`=3× step count, `ITER_TIMEOUT=20m`, `PLANNER_REVIEW=1`, `MAX_STEP_RETRIES=3`,
  `DEV_URL=http://localhost:5173`, `GATE_MODE=none`.
- `PROMPT.md` (executor): stay on branch; edit only files in the current step; port from
  the spec's `base44/` paths; match the ref image; on validator feedback, fix and retry;
  never fabricate output → `NEEDS_HUMAN` on tool errors.
- `PROMPT.planner.md`: pick the first unchecked step, confirm its route + ref image +
  acceptance, hand to executor.
- `PROMPT.validator.md`: you are a vision validator — given a screenshot path, the
  `ref-*.png`, and the spec "Must match" section, output exactly `VALIDATOR: MATCH=yes`
  or `VALIDATOR: MATCH=no` followed by a short bullet list of concrete
  pixel/layout/color/copy differences. Judge layout, type, color, spacing, copy — ignore
  placeholder text/avatars.

**2. Supporting scripts** under `loop/tasks/flourish-rebuild/scripts/`:

- `devserver.sh` — idempotent: if nothing is listening on 5173,
  `npm run dev -- --host --port 5173` in the background, log to
  `loop/logs/flourish-rebuild/dev.log`, wait until it responds. Safe to call every tick;
  only starts once.
- `shot.mjs` — Playwright (chromium): load `$DEV_URL<route>`, wait for network idle,
  full-page screenshot to a temp png. Run `npx playwright install chromium` if missing.
- `check.sh` — runs `npm run build` + `npm run lint`; if clean, calls `devserver.sh`, then
  `shot.mjs <route>`, then invokes a **validator cursor-agent** (`cursor-agent -p` with the
  validator prompt, passing the screenshot path, the ref image, and the spec) and greps its
  output for `MATCH=yes`. Exit 0 only if build/lint clean AND `MATCH=yes`. Print the
  validator's diff bullets either way. For `00-foundation`, skip the visual compare —
  gate on build/lint + token sanity only.

**3. Wire auto-retry** into the loop: on a failing Fast check, append the validator's
feedback under the step as `> validator (UTC): <bullets>`, let the executor re-attempt the
**same** step up to `MAX_STEP_RETRIES`. After that, mark `- [ ] **BLOCKED**` with a
one-line direction and continue to the next step. Extend `loop.sh` (or add a thin wrapper)
to support this validator stage + retry without breaking existing tasks.

**4. Smoke test, then run:**
```bash
bash loop/tasks/flourish-rebuild/scripts/devserver.sh   # then open http://localhost:5173
./loop/preflight.sh flourish-rebuild
MAX_ITERS=2 ./loop/loop.sh flourish-rebuild              # one planner+executor+validator tick
./loop/status.sh flourish-rebuild
```
If the smoke tick is green, run the full loop: `./loop/loop.sh flourish-rebuild`.

**Rules:** don't `git add` under `loop/`; don't invent steps beyond the specs; don't change
locked decisions; never fabricate validator/build output.

---

## Notes

- The dev server must exist — tasks 00/01 produce a working `npm run dev` (Vite). Early
  ticks build the foundation, so the validator compares a near-blank page; that's why
  `00-foundation` gates on build/lint, not a visual match.
- The validator depends on `cursor-agent -p` being able to read image files. If it can't,
  the fallback is a Claude/OpenAI vision API call inside `check.sh` (needs `ANTHROPIC_API_KEY`
  or `OPENAI_API_KEY`).
