# Autonomous agent rollback plan — cursor-app

Use this when a Cloud Agent, Cursor CLI agent, or scheduled automation misbehaves. **Human must approve merges** on `main` (branch protection recommended on GitHub).

## 1. Agent opened a bad PR (not merged)

**Symptoms:** Wrong files, failed verification omitted, or scope creep.

**Rollback:**

1. Close the PR on GitHub (or abandon local branch if no remote).
2. Delete the head branch:
   ```bash
   git checkout main
   git branch -D cursor-agent/<task-name>
   git push origin --delete cursor-agent/<task-name>   # if pushed
   ```
3. Re-open a manual PR from a clean branch if still needed.

**UI-only path:** GitHub → Pull requests → Close PR → Delete branch.

---

## 2. Agent pushed commits to a branch (PR open or direct push)

**Symptoms:** Bad commits on `cursor-agent/*` or accidental push to shared branch.

**Rollback (keep branch, undo commits):**

```bash
git fetch origin
git checkout cursor-agent/<task-name>
git log --oneline -5                    # identify last good SHA
git reset --hard <last-good-sha>
git push --force-with-lease origin cursor-agent/<task-name>
```

**If merged to `main` by mistake (local or remote):**

```bash
git checkout main
git pull origin main
git revert -m 1 <merge-commit-sha>    # or revert individual SHAs
git push origin main
```

Prefer **revert** over force-push on shared `main`.

---

## 3. Agent posted to an external system (Slack, Linear, GitHub comment)

**Symptoms:** Incorrect status, wrong run ID, or broken links.

**Rollback:**

| System | Action |
|--------|--------|
| **GitHub** | Edit or delete the comment; add follow-up: "Superseded — see corrected PR." |
| **Slack** | Post correction in thread; do not delete audit history unless policy requires. |
| **Linear** | Transition issue back to previous state; link corrected PR. |

**Secrets:** If a token leaked in a message, rotate the token in the provider UI and revoke the old credential before re-running the agent.

---

## Verification gate (required before merge)

Any autonomous run must attach output of:

```bash
npm run test:all
```

Do not merge if exit code ≠ 0.
