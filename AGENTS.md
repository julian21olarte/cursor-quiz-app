# cursor-app — agent context

- **Stack:** Node (Express, ESM) backend on port **4000**; React (Vite) frontend on **5173** with `/api` proxy to backend.
- **Install:** From repo root: `npm run install:all`.
- **Run dev:** `npm run dev` (both) or `npm run dev:backend` / `npm run dev:frontend`.
- **Tests:** `npm run test:all` (backend + frontend). Backend only: `npm run test --prefix backend`.
- **UI scores:** Use `formatPercentage(score, total)` for consistent `score/total (pct%)` copy.
- **Layout:** `backend/src/` for API; `frontend/src/` for UI; shared quiz data in `backend/data/quiz.json`.
- **API errors:** Use `sendApiError` / nested `{ error: { code, message } }` (see `.cursor/rules/api-errors.mdc`).
- **Dependencies:** Do not add npm packages unless the user explicitly asks.
- **Git:** Local course repo; do not `git push` unless the user requests it.
