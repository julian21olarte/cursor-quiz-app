# What the plan got wrong (2–3 sentences)

The plan assumed we could safely import `env.js` in the health router to expose `NODE_ENV` alongside `version`. That pulled Zod env validation into the Vitest import graph and produced intermittent failures when `NODE_ENV` was not preset. We caught it on the Step 2 test run, revised the plan under `## Revision`, and limited the payload to `status` + `version` only.
