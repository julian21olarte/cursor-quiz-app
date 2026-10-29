# Exercise reflection: Configure workspace and ship a small feature

**Feature shipped:** Personal best score persisted in `localStorage`, shown in the quiz header; submit button disabled until all questions are answered.  
**Commit:** `82f0f401ce4c6bcf7e9d5902c7e7b3b1e06a672d` on branch `main` (local only, no remote push).

---

## Step → surface mapping

| Step or sub-task | Surface | Why it fit (or did not) |
|------------------|---------|-------------------------|
| Pick a small feature in cursor-app | *(human)* | Repo already existed from exercise 1; chose “personal best in localStorage” from the course ideas list in `App.jsx`. |
| Change Cursor Tab partial accepts | **Settings** | One-time workspace preference before coding; documented in `exercise-2-cursor-setting-note.md`. |
| “Where is quiz submit handled and where should I persist score?” | **Ask Mode** (`Cmd+L`, Shift+Tab) | Read-only orientation across `App.jsx` and `api.js` without accidental edits. Confirmed submit flow lives in `onSubmit` after `submitQuiz`. |
| Add `bestScore` state and load on quiz fetch | **Cursor Tab** | Typed `const [bestScore, setBestScore] = useState(null);` and accepted a multi-line ghost suggestion for the `useEffect` block that calls `getBestScore(data.id)` after `setQuiz(data)`. |
| Extract pure `pickBestScore` + JSON parse guard in one file | **Inline Edit** (`Cmd+K`) | Selected `readAll` / `writeAll` in `bestScoreStorage.js`; prompt: “wrap localStorage access in try/catch and export pickBestScore for unit tests.” Scoped diff stayed in that file. |
| New util module, wire App, styles, npm test script | **Agent Mode** (`Cmd+I`) | Cross-file change: create `frontend/src/utils/bestScoreStorage.js`, update `App.jsx`, `App.css`, `frontend/package.json`, add `bestScoreStorage.test.js`. Reviewed diff before accept; understood storage key and quiz-id scoping. |
| Verify | **Terminal** | `cd frontend && npm test` (node:test for `pickBestScore`); manual check with `npm run dev` at repo root optional. |
| Wrong-surface moment | **Ask vs Agent** | Started to ask Agent to “rename a variable” in one file—switched to Inline Edit instead; Agent would have been heavier than needed. |

---

## When would I reach for each surface again?

- **Ask Mode:** When I need a map of the codebase (“who calls X?”, “where is config?”) and must not change files yet.
- **Cursor Tab:** When I am already typing in one function/component and the next lines are predictable from local context.
- **Inline Edit:** When I have a selected block and a single-file instruction (validation, rename, try/catch) and I want a reviewable diff.
- **Agent Mode:** When the work spans multiple files or steps (new module + integration + test script) and I am willing to review a larger patch set.

---

## Agent Mode diff (what I reviewed)

- Added `bestScoreStorage.js` with key `cursor-quiz-best-scores`, per-quiz-id map, safe parse/write.
- `App.jsx`: import helpers, track `bestScore`, update after grade, show “Personal best” in header, `allAnswered` gate on submit.
- `App.css`: `.best-score` styling.
- `package.json`: `"test": "node --test src/utils/bestScoreStorage.test.js"`.

No backend changes; grading API unchanged.
