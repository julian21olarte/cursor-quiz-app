const STORAGE_KEY = "cursor-quiz-best-scores";

export function pickBestScore(previous, currentScore) {
  if (typeof currentScore !== "number" || Number.isNaN(currentScore)) {
    return previous ?? null;
  }
  if (previous == null) return currentScore;
  return Math.max(previous, currentScore);
}

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function writeAll(map) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* quota / private mode — ignore */
  }
}

export function getBestScore(quizId) {
  if (!quizId) return null;
  const value = readAll()[quizId];
  return typeof value === "number" ? value : null;
}

export function saveBestScoreIfHigher(quizId, score) {
  if (!quizId) return getBestScore(quizId);
  const map = readAll();
  const next = pickBestScore(map[quizId] ?? null, score);
  if (next !== map[quizId]) {
    map[quizId] = next;
    writeAll(map);
  }
  return next;
}
