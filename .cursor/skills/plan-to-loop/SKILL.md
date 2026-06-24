---
name: plan-to-loop
description: >-
  Convert a manual loop/tasks PLAN.md into a runnable loop task (task.env,
  PROMPT.md, reformatted PLAN). Use when user says "plan to loop", "make this
  plan a loop task", or points at loop/tasks/*/PLAN.md missing task.env.
---

# Plan to loop

Scaffold a **runnable** `loop.sh` task from an existing plan. Do **not** run the loop unless the user asks.

## When to use

- `loop/tasks/<name>/PLAN.md` exists but `task.env` is missing
- User has a manual plan with `- [ ] **0.1**` and `Verify:` blocks
- User says "make this a loop task" or "plan to loop"

## Detect format

| Signal | Action |
|--------|--------|
| Has `- [ ] **Done**` under `### Step N.N` | Light touch: add missing `task.env`, `PROMPT.md`, `PROMPT.planner.md`, `README.md` only |
| Has `- [ ] **N.N**` or `Verify:` | Full PLAN transform (below) |

## Full PLAN transform

1. **Keep verbatim** at top: title, Architecture (locked), resolve rules, out-of-scope.
2. **Remove** "How to use this doc", executor handoff template, planner checklist (replaced by loop harness).
3. **Each sub-step** → own block:

```markdown
### Step 0.3 — Record golden row PO17603

- [ ] **Done**

**Notify:** Golden PO17603 baseline — customer_item_num, qty for later resolve check

**Work:** `SELECT po_document_id, ... FROM ... WHERE customer_po_ref = 'PO17603';`

**Done when:** ≥1 row; note customer_item_num, qty_unit, qty_raw

**Fast check:**
```sql
SELECT po_document_id, customer_po_ref, customer_item_num, qty_raw, qty_unit
FROM SHIELD_STAGING.BRONZE_PO.PO_DOCUMENTS WHERE customer_po_ref = 'PO17603';
```
```

Mapping from manual format:

| Manual | Loop |
|--------|------|
| `- [ ] **0.3** Title text` | `### Step 0.3 — Title text` + `- [ ] **Done**` |
| `Do:` | `**Work:**` |
| `Done when:` | `**Done when:**` (unchanged) |
| `Verify:` | `**Fast check:**` fenced block |
| (missing) | `**Notify:**` one line from title + done-when |

4. **Append** sign-off log:

```markdown
## Sign-off log

| Step | Date (UTC) | Executor | Planner | Notes |
|------|------------|----------|---------|-------|
| 0.1  |            |          |         |       |
```

5. **Append** run section:

```markdown
## Run

```bash
./loop/preflight.sh <task-name>
./loop/loop.sh <task-name>
```
```

## Generate task.env

From [`loop/templates/task.env`](../../loop/templates/task.env):

```bash
LABEL="<human title from plan>"
BRANCH="<git branch --show-current>"
PLAN="loop/tasks/<task>/PLAN.md"

PLANNER_REVIEW=1
FINDING_MODE=report
SLACK_VERBOSE=0
MAX_ITERS=<2 × step count>
ITER_TIMEOUT=20m
GATE_PHASE=6
GATE_MODE=none
ALLOW_GATE=0
```

If plan mentions `dbt`:

```bash
DBT_PROJECT_DIR="dags/dbt/dbt_shield"
DBT_TARGET=dev
DBT_TARGET_FORBIDDEN=prod
```

## Generate PROMPT.md

Extract from plan:

- Locked architecture / out-of-scope bullets
- Branch stay rule
- Golden PO or north-star validation IDs
- MCP: Snowflake for SQL fast checks; never fabricate results

## Generate PROMPT.planner.md

Table of steps whose **Fast check** contains SQL or Snowflake:

```markdown
| Step | Verify |
|------|--------|
| 0.1 | PO_DOCUMENTS count > 0 |
| 4.2 | Golden PO17603 → VP13065, qty 6300 |
```

## Generate README.md

- What the task does (one paragraph)
- `preflight`, `loop.sh`, `status.sh` commands
- Plan complete when: last required step signed off

## Do not

- `git add` under `loop/` (local exclude)
- Run `./loop/loop.sh` unless user asks
- Change locked architecture decisions in the plan

## After scaffolding — print checklist

```text
Scaffolded loop/tasks/<task>/
  ./loop/preflight.sh <task>
  MAX_ITERS=2 ./loop/loop.sh <task>   # smoke: one executor + planner tick
  ./loop/status.sh <task>
```

## Example: manual → loop (step 0.3)

**Before:**

```markdown
- [ ] **0.3** Record golden row for step 1 validation
  - **Do:** `SELECT ... WHERE customer_po_ref = 'PO17603';`
  - **Done when:** ≥1 row; note customer_item_num, qty_unit, qty_raw
  - **Verify:** paste row(s). Expected: VP13065, 6300 cases
```

**After:** see full transform block above.
