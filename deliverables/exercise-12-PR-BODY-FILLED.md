## Summary

Cloud Agent task (exercise 12 resubmission): add **Quick reference** table to README only.  
Human baseline on `main` already includes `AUTONOMOUS_ROLLBACK.md`, CI workflow, and `verify-gate.sh`.

## AI authorship

| File | Authorship |
|------|------------|
| `README.md` (Quick reference section) | Cursor Agent / Agent Mode |
| `AUTONOMOUS_ROLLBACK.md`, `.github/workflows/test-all.yml` | Human baseline on `main` (not this PR) |

## Verification

```bash
./scripts/verify-gate.sh
```

<details><summary>Full output (autonomous/verification-output.txt)</summary>

```
Running verification gate: npm run test:all
Started: 2026-10-29T14:54:55Z
---
npm warn Unknown env config "devdir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.

> cursor-quiz-app@1.0.0 test:all
> npm run test --prefix backend && npm run test --prefix frontend

> cursor-quiz-backend@1.0.0 test
> node --test src/**/*.test.js

✔ apiErrorBody nests code and message
✔ apiErrorBody includes details when provided
✔ getHealthPayload includes service, version, uptimeSeconds
✔ getQuizMeta exposes id and questionCount from quiz.json
✔ rejects non-array answers
✔ rejects empty array
✔ rejects invalid answer shape
✔ rejects duplicate question ids
✔ accepts valid payload
ℹ tests 9
ℹ pass 9
ℹ fail 0

> cursor-quiz-frontend@1.0.0 test
> node --test src/utils/bestScoreStorage.test.js

✔ pickBestScore returns current when no previous
✔ pickBestScore keeps higher score
✔ pickBestScore ignores invalid current
✔ regression: recorded best is not replaced by a lower score
ℹ tests 4
ℹ pass 4
ℹ fail 0
---
Exit code: 0
PASS — gate open for PR
```

</details>

## CI

GitHub Actions workflow `test-all` / job **`test`** must pass on this PR.

## Rollback

Close PR and delete branch; see `AUTONOMOUS_ROLLBACK.md` section 1.
