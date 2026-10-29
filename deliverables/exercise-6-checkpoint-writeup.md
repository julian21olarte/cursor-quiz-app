# Exercise 6 write-up (Restore Checkpoint)

**Feature shipped:** Enriched `GET /api/health` with `version` (from `backend/package.json`) and `uptimeSeconds`, plus a frontend header hint `API v1.0.0` loaded via `fetchHealth()` in parallel with quiz data. Files touched: `healthPayload.js`, `healthPayload.test.js`, `server.js`, `api.js`, `App.jsx` (five files).

**Pre-session git floor:** commit `39c6d3c` (`chore: exercise 6 pre-session checkpoint floor`) before opening Agent sidepane (`Cmd+I`).

**Initial Agent prompt:** Extend `/api/health` with version and uptime; wire the React header; add a node:test for the payload builder; run `npm run test --prefix backend` when done.

**Wrong turn:** After the first good diff, I asked the Agent to “shuffle quiz options with lodash for better UX.” It edited `quizService.js`, added `lodash` to `backend/package.json`, and created `quizShuffle.js`—a dependency and refactor outside scope.

**Restore Checkpoint:** In the **sidepane** (not Agents Window), I used **Restore Checkpoint** on the message *before* the lodash instruction. Agent-edited sources (`quizService.js`, `package.json`, new shuffle file) reverted in the editor timeline.

**What did *not* revert:** Terminal scrollback still showed the attempted `npm install lodash` output; my shell history retained that command; untracked `node_modules/lodash` would have remained if install had completed (it was denied in exercise 5 style—here I cancelled before install finished). Git history was unchanged because I had not committed the wrong turn.

**Recovery re-prompt:** “Only implement health payload + tests + frontend version label. Do not add dependencies or change quiz loading.”

**Verification (Agent-invoked tool):** Agent ran allowlisted `npm run test --prefix backend`; output captured in `exercise-6-verification-output.txt` (9 tests passing including `healthPayload.test.js`).

**Final commit:** `feat: enrich health endpoint and show API version in UI` (see `exercise-6-git-log.txt`).
