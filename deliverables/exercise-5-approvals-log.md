# Approval prompts log (first 5 + denial)

| # | Command (as shown in Cursor) | Decision | Reasoning |
|---|------------------------------|----------|-----------|
| 1 | `npm run test --prefix backend` | Approve once | Read-only verification; matches allowlist; needed to confirm new quizService test passes. |
| 2 | `npm run test --prefix frontend` | Approve once | Allowlisted; ensures best-score tests still pass after doc/script changes. |
| 3 | `git status` | Approve once | Read-only; confirm which files Agent touched before reviewing diff. |
| 4 | `npm install --prefix backend` | **Deny** | Not on allowlist; install mutates `node_modules` and is unnecessary—deps unchanged per diff. |
| 5 | `npm run test:all` | Approve once | Explicitly allowlisted root script added by the task; final verification after pushback. |
| 6 | `git push origin main` | **Deny** | Course constraint: no remote mutations; push is out of scope and unsafe for this exercise. |

**Modified prompt (not a shell approval):** After first diff review, rejected Agent’s addition of `console.log('meta', meta)` in `server.js` via follow-up: “Remove debug logging; keep only tests, README, and test:all script.”
