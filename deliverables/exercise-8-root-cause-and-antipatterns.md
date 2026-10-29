# Root cause and antipattern self-check

**Root cause (one sentence):** `pickBestScore` used `Math.min(previous, currentScore)` instead of `Math.max`, so a worse quiz attempt overwrote the stored personal best.

**Debug Mode use:** Fed Debug Mode only the assertion output above plus `frontend/src/utils/bestScoreStorage.js` as entry point; hypothesis was inverted comparison operator (min vs max), not localStorage corruption.

**Antipattern catalog self-check:**

| Antipattern | Applied? |
|-------------|----------|
| Weaken assertion to match bug | **Rejected** — kept expecting `5` when previous is `5` and current is `3`. |
| Edit mock/storage to hide bug | **Rejected** — did not stub localStorage in tests to force pass. |
| Swallow errors / empty catch to pass | **Rejected** — no change to `readAll` try/catch for the fix. |
| Disable failing test | **Rejected** — added regression test instead. |

Fix restores `Math.max` semantics and adds explicit regression for “lower attempt must not win.”
