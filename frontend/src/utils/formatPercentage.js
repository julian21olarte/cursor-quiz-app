export function formatPercentage(score, total) {
  if (!total || total <= 0) {
    return `${score}/0 (0%)`;
  }
  const pct = Math.round((score / total) * 100);
  return `${score}/${total} (${pct}%)`;
}
