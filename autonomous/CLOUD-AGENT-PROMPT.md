# Cloud Agent prompt (low risk — README only)

Use with **Cloud Agents** or **Agent** against the GitHub-linked repo.  
`AUTONOMOUS_ROLLBACK.md` and CI already exist on `main` — **do not modify them**.

---

## Prompt

Polish **only** `README.md`:

1. Add an English section **## Quick reference** with a markdown table: Install, Dev, Run tests, API health URL, Frontend URL.
2. Do not change any file under `backend/` or `frontend/`.
3. Before opening a PR, run from repo root:
   ```bash
   chmod +x scripts/verify-gate.sh
   ./scripts/verify-gate.sh
   ```
4. Open a PR to `main` titled `docs: README quick reference table`.
5. Paste the **full contents** of `autonomous/verification-output.txt` into the PR description under `## Verification`.
6. Stop if verification exit code is non-zero; do not open the PR.

---

## Scope

- **Allowed:** `README.md` only  
- **Forbidden:** rollback doc, workflow files, production code, new dependencies
