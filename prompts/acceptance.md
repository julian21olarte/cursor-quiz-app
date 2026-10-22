# Acceptance criteria — API errors feature

All items are machine-verifiable without human judgment.

| ID | Criterion | How to verify |
|----|-----------|---------------|
| AC-1 | Backend tests pass | `cd backend && npm test` → exit code `0` |
| AC-2 | Error JSON shape | Tests in `backend/src/apiErrors.test.js` assert `{ error: { code, message } }` |
| AC-3 | Submit validation codes | `backend/src/quizSubmitValidation.test.js` covers non-array, empty, bad shape, duplicate ids, valid payload |
| AC-4 | No new dependencies | `backend/package.json` dependencies unchanged (only `cors`, `express`) |
| AC-5 | No Spanish strings in backend validation | `grep -r "Se esperaba\\|Cada respuesta" backend/src` → exit code `1` (no matches) |
| AC-6 | Frontend reads nested errors | `frontend/src/api.js` contains `body.error.message` (or equivalent) in error parsing |

Optional manual check (not required for AC table):

```bash
curl -s -X POST http://localhost:4000/api/quiz/submit -H 'Content-Type: application/json' -d '{}'
# expect error.code ANSWERS_NOT_ARRAY
```
