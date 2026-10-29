# Project Rules (full contents)

## Path: `.cursor/rules/api-errors.mdc`

```markdown
---
description: Backend HTTP errors must use sendApiError and nested error codes
globs: backend/src/**/*.js
alwaysApply: false
---

# API error responses

When adding or changing Express routes under `backend/src/`:

- Never use `res.status(n).json({ error: "plain string" })` for application errors.
- Import `sendApiError` from `./apiErrors.js` (or `../apiErrors.js` from nested folders).
- Every error body must be `{ error: { code, message } }` via `sendApiError`.
- Use `SCREAMING_SNAKE_CASE` for new `code` values (e.g. `QUIZ_LOAD_FAILED`).
- User-facing `message` strings must be English.
```

## Path: `.cursor/rules/frontend-utils-tests.mdc`

```markdown
---
description: New frontend utils must ship with node:test coverage
globs: frontend/src/utils/**/*.js
alwaysApply: false
---

# Frontend utility modules

When creating or editing files under `frontend/src/utils/`:

- Add or update a colocated `*.test.js` file (same basename).
- Use Node built-in `node:test` and `node:assert/strict` (match `bestScoreStorage.test.js`).
- Cover at least happy path and one edge case.
- Do not add Jest/Vitest dependencies for utils-only changes.
```

Activation: both use **autoAttached** via `globs`, not `alwaysApply: true`, so scoped facts stay out of unrelated edits.
