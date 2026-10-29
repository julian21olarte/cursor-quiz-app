# Explore phase — Ask Mode (Cmd+L, Shift+Tab, read-only)

Repo opened: `exercise-7-unfamiliar` (clone of `w3cj/express-api-starter`).

---

**Question 1:** Where is the Express app created and where are API routes mounted?

**Answer (Cursor Ask):** The app factory lives in `src/app.js`: middleware stack, root `GET /`, then `app.use("/api/v1", api)` where `api` is the router from `src/api/index.js`. Emoji routes are nested under `src/api/emojis.js`. Error handling is in `src/middlewares.js` after routes.

---

**Question 2:** How are HTTP endpoints tested in this repo?

**Answer (Cursor Ask):** Tests use Vitest + Supertest. `test/api.test.js` imports the default export from `src/app.js` and calls `request(app).get(...)` with expected JSON bodies. Run via `pnpm test` (`vitest run` in `package.json`).

---

**Question 3:** What is the entry point when the server runs, and which port/env vars matter?

**Answer (Cursor Ask):** `src/index.js` starts the HTTP listener; `src/env.js` validates `NODE_ENV` and `PORT` with Zod (default port 3000). Scripts use `node --env-file=.env`; copy `.env.sample` to `.env` before `pnpm dev` or `pnpm start`.

---

No edits were made during Explore (Ask Mode only).
