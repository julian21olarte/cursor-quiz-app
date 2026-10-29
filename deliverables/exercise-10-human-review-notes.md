# Human review notes (3+)

## 1. Request changes — correctness / drift risk

**File:** `frontend/src/App.jsx` (score panel)

**Note:** The API still returns `result.percentage`, but the UI now ignores it and recomputes via `formatPercentage`. That is fine if rounding rules stay identical, but nothing asserts parity with the backend field. Please add a test or an inline comment explaining the single source of truth, or assert equality in a test fixture.

**Resolution:** Added JSX comment + `formatPercentage` rounding test (`1/3 → 33%`); follow-up commit on branch.

---

## 2. Approve with comments — test coverage

**File:** `frontend/src/utils/formatPercentage.test.js`

**Note:** Good addition of the 1/3 case. Consider documenting that backend uses `Math.round((score/total)*100)` so future editors know why 33% is expected.

**Resolution:** JSDoc on `formatPercentage.js` mentions backend alignment.

---

## 3. Request changes — design consistency

**File:** `frontend/src/App.jsx` (personal best line)

**Note:** Personal best previously showed `8 / 5` style without percent; now uses full `formatPercentage` including `%`. Confirm product-wise we want percent on best score (I agree yes for consistency).

**Resolution:** Kept formatted string; verified manually in dev.

---

## 4. Approve with comments — docs

**File:** `README.md`

**Note:** Short pointer to util is enough for this repo size; no blocker.

**Type summary:** 2× request changes (addressed), 2× approve with comments.
