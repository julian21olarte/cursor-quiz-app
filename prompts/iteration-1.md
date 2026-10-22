# Iteration 1 — vague seed → structured Agent prompt

## Seed prompt (vague)

> Make the API errors better.

---

## Acceptance criteria

See `prompts/acceptance.md` (machine-verifiable checklist for this iteration).

---

## Refined prompt (Prompt Shape)

### Context

- Repository: **cursor-app**, a small Node (Express) + React quiz app used for a Cursor course.
- Backend entry: `backend/src/server.js`. Quiz grading lives in `backend/src/quizService.js`.
- `POST /api/quiz/submit` currently returns ad hoc JSON errors (mixed Spanish/English strings, no stable `code` field).
- Frontend `frontend/src/api.js` reads `body.error` as a plain string when submit fails.
- Stack: ESM (`"type": "module"`), no TypeScript, no test runner beyond Node’s built-in `node:test` (already used in `frontend/src/utils/bestScoreStorage.test.js`).

### Task

Improve API error responses for the backend (focus on submit validation and common HTTP failures):

1. Introduce a small helper (e.g. `backend/src/apiErrors.js`) that sends a **consistent JSON shape** for errors.
2. Extract submit-body validation into a testable module (e.g. `backend/src/quizSubmitValidation.js`) and use it from `server.js`.
3. Return **English** `message` strings and stable **machine-readable `code`** values for each validation failure on `POST /api/quiz/submit`.
4. Add a 404 handler for unknown routes and handle invalid JSON bodies with a clear 400 response.
5. Update `frontend/src/api.js` so the UI shows the nested error message when submit/load fails.

### Constraints

- **No new npm dependencies** (use Express + `node:test` only).
- Keep existing successful response shapes unchanged (`GET /api/quiz`, graded submit payload).
- Follow existing file layout: modules under `backend/src/`, tests colocated as `*.test.js`.
- Use ESM `import`/`export`; match naming style of `quizService.js`.
- Do not refactor unrelated frontend UI copy unless required for error display.

### Verification

- `cd backend && npm test` exits 0 (include tests for validation + error body shape).
- Every `400` from submit validation returns JSON matching `{ "error": { "code": string, "message": string } }`.
- Manual or scripted check: `POST /api/quiz/submit` with `{}` returns code `ANSWERS_NOT_ARRAY` (or equivalent documented in tests).
- `grep -r "Se esperaba" backend/src` returns no matches (no leftover Spanish validation strings in backend src).
