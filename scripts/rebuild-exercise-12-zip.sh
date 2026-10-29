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
  ../autonomous/verification-output-FAIL-EXAMPLE.txt \
  ../autonomous/local-agent-evidence.txt \
  exercise-12-SOLO-CAPTURAS.md
for png in exercise-12-cloud-agent-run-id.png exercise-12-branch-protection.png; do
  if [[ -f "$png" ]]; then
    zip "$ZIP" "$png"
  fi
done
echo "Wrote $ZIP"
missing=0
for png in exercise-12-cloud-agent-run-id.png exercise-12-branch-protection.png; do
  [[ -f "$DEL/$png" ]] || { echo "WARN: missing $png — see exercise-12-SOLO-CAPTURAS.md"; missing=1; }
done
if [[ "$missing" -eq 0 ]]; then
  echo "OK: both screenshots present — ready for LMS upload."
else
  echo "Zip created; add screenshots and re-run to include them."
fi
exit 0
