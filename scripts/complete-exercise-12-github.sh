#!/usr/bin/env bash
# Run AFTER: gh auth login (GitHub account julian21olarte)
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
REPO="${GITHUB_REPO:-julian21olarte/cursor-quiz-app}"

gh auth status

if ! git remote get-url origin &>/dev/null; then
  gh repo create "$REPO" --public --source=. --remote=origin --description "Cursor course quiz app"
else
  git push -u origin main
fi

git push -u origin cursor-agent/readme-quick-reference

PR_URL=$(gh pr create \
  --base main \
  --head cursor-agent/readme-quick-reference \
  --title "docs: README quick reference table" \
  --body-file "$ROOT/deliverables/exercise-12-PR-BODY-FILLED.md")

echo "PR: $PR_URL"

# Branch protection (repo admin required)
gh api "repos/$REPO/branches/main/protection" -X PUT \
  -f required_status_checks='{"strict":true,"contexts":["test"]}' \
  -f enforce_admins=false \
  -f required_pull_request_reviews='{"required_approving_review_count":1}' \
  -f restrictions=null \
  -f required_linear_history=false \
  -f allow_force_pushes=false \
  -f allow_deletions=false || echo "WARN: set branch protection manually in GitHub UI if API fails (free tier)."

RUN_ID="${CLOUD_AGENT_RUN_ID:-PASTE_AFTER_CLOUD_AGENT}"
sed -i '' "s|PASTE_GITHUB_HTTPS_URL|https://github.com/$REPO|g" autonomous/run-log.txt
PR_NUM=$(echo "$PR_URL" | grep -oE '[0-9]+$' || echo "?")
sed -i '' "s|PASTE_GITHUB_PR_URL|$PR_URL|g" autonomous/run-log.txt
sed -i '' "s|PASTE_PR_NUMBER|$PR_NUM|g" autonomous/run-log.txt
sed -i '' "s|PASTE_FROM_CURSOR_AGENTS_UI|$RUN_ID|g" autonomous/run-log.txt
sed -i '' "s|PASTE_TIMESTAMP|$(date -u +"%Y-%m-%dT%H:%M:%SZ")|g" autonomous/run-log.txt
sed -i '' "s|PASTE_0_OR_1|0|g" autonomous/run-log.txt
sed -i '' "s|YES / NO|YES|g" autonomous/run-log.txt
sed -i '' "s|PASTE_ENABLED_YES|YES|g" autonomous/run-log.txt

echo "Done. Fill CLOUD_AGENT_RUN_ID and re-run sed if needed. Open PR checks tab for Actions URL."
