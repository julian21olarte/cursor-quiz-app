# Deliverable: exact Agent implementation prompt

**Index readiness:** Cursor Settings → Indexing → “Index Repositories for Instant Grep” enabled; workspace `cursor-app` is a git repo with commits (Instant Grep local index).

**Ask Mode (planning, no code pasted):**  
Attached `@backend/src/server.js`, `@backend/src/quizService.js`, `@frontend/src/api.js`, `@frontend/src/App.jsx`, `@.cursor/rules/api-errors.mdc`.  
Asked where to add a lightweight metadata endpoint and how the UI should consume it without duplicating quiz payload logic.

---

## Agent Mode — implementation prompt (no pasted code snippets)

Implement a cross-file quiz metadata feature for cursor-app.

Context attachments:
- @backend/src/server.js
- @backend/src/quizService.js
- @backend/src/apiErrors.js
- @frontend/src/api.js
- @frontend/src/App.jsx
- @frontend/src/App.css
- @.cursor/rules/api-errors.mdc

Non-code attachment:
- @deliverables/exercise-4-terminal-output.txt

Task:
- Add GET /api/quiz/meta returning quiz id, title, and questionCount from existing quiz data.
- Add a service function alongside existing quiz exports.
- Load meta in the frontend in parallel with the full quiz and show id + question count in the header.
- If quiz data fails to load on the server, respond using our project error convention.

Constraints:
- Do not paste or duplicate large blocks from chat; use attached files only.
- Touch at least backend and frontend files.
- No new npm dependencies.
- Follow the attached Project Rule for any new HTTP errors.

Verification:
- Match the passing backend test output in the attached terminal file.
- curl GET /api/quiz/meta returns 200 with questionCount when the API is running.
