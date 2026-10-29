# Plan: Add GET /api/v1/health (express-api-starter)

**One-sentence change:** Expose a read-only health JSON endpoint under the existing `/api/v1` router for uptime checks.

**Repo:** `exercise-7-unfamiliar` (clone of w3cj/express-api-starter, not previously edited by me).

## Expected files to touch

| File | Purpose |
|------|---------|
| `src/api/health.js` | Router handler returning `{ status, version }` |
| `src/api/index.js` | Mount `/health` sub-router |
| `test/api.test.js` | Supertest coverage for new route |

## Steps (Agent runs separately)

1. **Step 1 — Route module:** Create `health.js` with `GET /` returning `status: "ok"` and `version` from `package.json` (import JSON module).  
   **Verify:** `pnpm test` — existing tests still pass (health test added in step 2 or same step).

2. **Step 2 — Wire + test:** Register `router.use("/health", health)` in `api/index.js`; add vitest case expecting 200 and body shape.  
   **Verify:** `pnpm test` all green.

3. **Step 3 — Manual smoke:** `pnpm start` with `.env` from sample; `curl localhost:PORT/api/v1/health`.  
   **Verify:** JSON includes `status` and `version`.

## Assumptions

- Follow existing ESM + express Router pattern in `emojis.js`.
- No new dependencies.
- Do not modify root `GET /` emoji message.

## Revision

- **Wrong assumption:** Step 1 draft imported `env` from `src/env.js` to include `NODE_ENV` in the health payload. Vitest loaded the router before `process.env` matched the Zod schema in some runs, causing flaky failures.
- **Correction:** Health router reads only `package.json` version + static `status: "ok"`. No change to `env.js`.
- **Caught by:** Step 2 verification — `pnpm test` failed until env import was removed (reviewed diff before continuing).
