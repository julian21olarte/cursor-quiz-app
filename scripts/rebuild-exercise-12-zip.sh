#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEL="$ROOT/deliverables"
ZIP="$DEL/exercise-12-cloud-agent-gates-REVISION.zip"
cd "$DEL"
rm -f "$ZIP"
zip "$ZIP" \
  exercise-12-cloud-agent-reflection.md \
  exercise-12-revision-deliverables.txt \
  exercise-12-TU-PASOS-ES.md \
  exercise-12-branch-protection-api-evidence.json \
  ../AUTONOMOUS_ROLLBACK.md \
  ../autonomous/run-log.txt \
  ../autonomous/verification-output.txt \
  ../autonomous/verification-output-FAIL-EXAMPLE.txt
for png in exercise-12-cloud-agent-run-id.png exercise-12-branch-protection.png; do
  if [[ -f "$png" ]]; then
    zip "$ZIP" "$png"
  fi
done
echo "Wrote $ZIP"
if grep -q PASTE_FROM_CURSOR_AGENTS_UI "$ROOT/autonomous/run-log.txt" 2>/dev/null; then
  echo "WARN: run-log still missing Cloud Agent Run ID — add PNG + Run ID before LMS upload."
fi
