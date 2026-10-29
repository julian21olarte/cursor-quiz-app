# Deliverable: Project Rule (path + full contents)

**Path:** `.cursor/rules/api-errors.mdc`

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

**Convention captured (one):** structured API errors via `sendApiError` + nested `error.code` / `error.message`.

**Line count:** 17 lines including frontmatter (under 30).
