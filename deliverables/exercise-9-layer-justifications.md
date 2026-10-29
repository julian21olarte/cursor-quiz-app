# One-sentence justification per layer

| Rule | Layer | Why here |
|------|-------|----------|
| `api-errors.mdc` | **Project Rule** (glob: `backend/src/**/*.js`) | Repo-specific HTTP contract tied to Express files; should auto-attach only when editing backend routes, not globally. |
| `frontend-utils-tests.mdc` | **Project Rule** (glob: `frontend/src/utils/**/*.js`) | Scoped testing convention for util modules—a repeated Agent mistake (shipping utils without tests) only matters in that folder. |
| `AGENTS.md` | **Repo root always-on context** | Commands, ports, and layout apply to every task in this monorepo regardless of which file is open. |
| Spanish chat / English API copy | **User Rule** | Personal workflow preference across all projects, not something teammates should inherit via git. |

**Activation mode (api-errors):** `alwaysApply: false` + `globs` → **autoAttached** when backend sources are in context; avoids noise when editing only React CSS.

**Activation mode (frontend-utils-tests):** same pattern for util files only.

**Three repeated Agent mistakes this set targets:**

1. Plain-string or Spanish API errors instead of `sendApiError` (exercise 3).
2. New frontend utils without colocated `node:test` files (exercise 2 best-score work).
3. Drive-by `npm install` / extra dependencies (exercises 5–6).
