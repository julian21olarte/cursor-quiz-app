#!/usr/bin/env bash
# Verification gate for autonomous runs — exit non-zero if tests fail.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
OUT="${ROOT}/autonomous/verification-output.txt"
echo "Running verification gate: npm run test:all" | tee "$OUT"
echo "Started: $(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> "$OUT"
echo "---" >> "$OUT"
if npm run test:all >> "$OUT" 2>&1; then
  echo "---" >> "$OUT"
  echo "Exit code: 0" >> "$OUT"
  echo "PASS — gate open for PR" | tee -a "$OUT"
  exit 0
else
  code=$?
  echo "---" >> "$OUT"
  echo "Exit code: $code" >> "$OUT"
  echo "FAIL — do not open or merge PR until fixed" | tee -a "$OUT"
  exit "$code"
fi
