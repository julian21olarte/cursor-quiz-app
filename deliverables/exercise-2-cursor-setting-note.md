# Cursor workspace setting change

**Repository:** cursor-app  
**Date:** 2026-10-22

## Setting changed

**Location:** Cursor Settings → **Tab** → **Partial Accepts** (enabled)

## Previous behavior

Tab suggestions were accepted all-or-nothing. Multi-line ghost text often included one useful line plus boilerplate I did not want, so I either rejected the whole suggestion or cleaned up manually.

## Why I changed it

For this exercise I planned to accept multi-line Tab completions in `App.jsx` while shipping the localStorage best-score feature. Partial accepts let me take the first sensible lines (e.g. state wiring) without accepting an entire block that touched unrelated JSX.

## Expected impact on this task

- Faster iteration when typing new hooks/state in React components.
- Less backtracking after an over-long Tab suggestion.
- Clearer separation between **Tab** (inline flow) and **Inline Edit** (explicit instruction on a selection).
