const STORAGE_KEY = "cursor-quiz-best-scores";

function isValidScore(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

function chooseHigherScore(previous, currentScore) {
  return Math.max(previous, currentScore);
}

export function pickBestScore(previous, currentScore) {
  if (!isValidScore(currentScore)) {
    return previous ?? null;
  }
  if (previous == null) return currentScore;
  return chooseHigherScore(previous, currentScore);
}

function parseScoreMap(raw) {
  if (!raw) return {};
  const parsed = JSON.parse(raw);
  return typeof parsed === "object" && parsed !== null ? parsed : {};
}

function readAll() {
  try {
    return parseScoreMap(localStorage.getItem(STORAGE_KEY));
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
