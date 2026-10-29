# GitHub setup (required for exercise 12 resubmission)

## 1. Push repository

```bash
git remote add origin https://github.com/<YOUR_USER>/cursor-app.git
git push -u origin main
```

## 2. Enable branch protection on `main`

GitHub → **Settings** → **Branches** → **Add rule** for `main`:

- [x] Require a pull request before merging
- [x] Require approvals (1+)
- [x] Require status checks to pass before merging
- [x] Require branch to be up to date before merging
- Status check name: **`test`** (from `.github/workflows/test-all.yml` job `test`)

Save rule. Screenshot this page for the course (redact org secrets).

## 3. Cloud Agent task (README only)

**Do not** ask the agent to create `AUTONOMOUS_ROLLBACK.md` — it already exists on `main`.

Use prompt in `autonomous/CLOUD-AGENT-PROMPT.md`.

## 4. PR body

Copy `autonomous/PR-BODY-TEMPLATE.md` and paste **real** `./scripts/verify-gate.sh` output.

## 5. Evidence to capture

- Cloud Agents UI: **Run ID** + screenshot
- GitHub PR URL + number
- GitHub Actions run URL for `test-all` on the PR branch
