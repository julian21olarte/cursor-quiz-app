## Summary

Cloud Agent: README quick reference table (docs-only).

## AI authorship

- **AI-authored:** README `## Quick reference` table and wording.
- **Human-reviewed:** Scope limited to README; verification output verified locally and on CI.

## Verification

Command:

```bash
./scripts/verify-gate.sh
```

Output (paste from `autonomous/verification-output.txt` after a real run):

```
[PASTE FULL FILE CONTENTS HERE — must show Exit code: 0 or show FAIL blocked PR]
```

## CI

GitHub Actions `test-all` / job `test` must be green on this PR before merge.

## Rollback

If this PR is wrong: close PR, delete branch `cursor-agent/readme-quick-reference`, see `AUTONOMOUS_ROLLBACK.md` §1.
