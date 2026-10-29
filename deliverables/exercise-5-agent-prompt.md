# Agent task (original prompt)

**Auto-run mode:** Run in Sandbox (not Run Everything)

**Repository:** cursor-app (local git, no remote push)

**Prompt sent to Agent Mode:**

Add automated coverage for the quiz metadata feature shipped in exercise 4. Include a backend test that asserts `getQuizMeta()` returns a stable question count from `backend/data/quiz.json`, document `GET /api/quiz/meta` in the root README, and add a root npm script `test:all` that runs backend and frontend tests. Do not add dependencies. After edits, run only allowlisted test commands.
