# Intentional rollback

**Level:** `git restore` (unstaged working tree)

**Trigger:** During refactor pass 1, Debug Mode suggested “simplify” the regression test by changing the expected value from `8` to `6` to match the (already fixed) min-bug behavior description—effectively weakening the test (antipattern #1).

**Action:** `git restore frontend/src/utils/bestScoreStorage.test.js`

**State returned to:** Regression test from commit `f9d849e` intact (`recordedBest = 8`, `worseAttempt = 6`, expect `8`). Continued refactor on production code only (`isValidScore`, then `parseScoreMap`) in separate commits.

Not used: Cursor checkpoint (no bad Agent multi-file edit), `git reset`/`git revert` (fix commit already correct and local-only).
