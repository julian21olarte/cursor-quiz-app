# PR: Use shared formatPercentage in quiz score UI

## Summary

- Wire `formatPercentage()` into post-submit score and personal-best header lines.
- Extend util tests for rounding parity with backend `gradeQuiz` (e.g. 1/3 → 33%).
- Document formatter in `README.md` and `AGENTS.md`.

## AI authorship disclosure

| Area | Authorship |
|------|------------|
| `frontend/src/App.jsx` | **Cursor Agent** (initial wiring); human added review comment on score line |
| `frontend/src/utils/formatPercentage.js` | **Cursor Agent** (prior commit); human added doc comment this PR |
| `frontend/src/utils/formatPercentage.test.js` | **Cursor Agent** + human-added rounding case after review |
| `README.md`, `AGENTS.md` | **Cursor Agent** draft; human edited wording |

## Verification (local)

```bash
npm run test:all
npm run dev
# Complete quiz; score line shows e.g. 4/5 (80%)
```

## Review

- [x] Human review (3 notes below in deliverable bundle)
- [ ] Bugbot: not enabled on this local-only repo (see exercise-10-bugbot.md)

**Branch:** `feat/score-format-ui` → merged locally to `main` (no remote push per course setup).
