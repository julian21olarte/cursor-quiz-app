# Validation task (same prompt both runs)

**Task (5–10 min):** Add `formatPercentage(score, total)` in `frontend/src/utils/` returning a string like `3/5 (60%)` for the quiz score panel. Wire it nowhere else yet.

**Run A — rules off:** Disabled Project Rules (Cursor Settings), temporarily renamed `AGENTS.md` to `AGENTS.md.bak`, User Rule cleared for the session.

**Run B — rules on:** Restored `AGENTS.md`, enabled `.cursor/rules/*`, User Rule active.

---

## Before (rules disabled)

**User:** Add formatPercentage(score, total) in frontend/src/utils returning 3/5 (60%) style string.

**Agent:** Created `frontend/src/utils/formatPercentage.js`:

```javascript
export function formatPercentage(score, total) {
  const pct = total ? Math.round((score / total) * 100) : 0;
  return `${score}/${total} (${pct}%)`;
}
```

No test file. Comment in Spanish: `// formatea puntaje para UI`.

**Behavior gap:** No `formatPercentage.test.js`; grader cannot run targeted util test; violates repo habit from `bestScoreStorage.test.js`.

---

## After (full rule set)

**User:** Same prompt.

**Agent:** Citing **AGENTS.md** (`npm run test:all`) and **frontend-utils-tests.mdc**, added:

- `frontend/src/utils/formatPercentage.js` (English comment, guards `total === 0`)
- `frontend/src/utils/formatPercentage.test.js` with happy path + zero-total edge case

Excerpt Agent message:

> Following `frontend-utils-tests.mdc`, adding colocated node:test coverage. Running `npm run test --prefix frontend` per AGENTS.md.

**Line where rule bite is visible:** creation of `formatPercentage.test.js` import block mirroring `bestScoreStorage.test.js` — absent in Run A.

---

## Caption for grader

| Run | Evidence |
|-----|----------|
| Before | Single `.js` file, no test, Spanish comment |
| After | `.js` + `.test.js`, Agent cites Project Rule + AGENTS.md, English-only code comments |

Optional screenshot: Agent chat showing rule name `frontend-utils-tests` in context chips (user can capture locally).
