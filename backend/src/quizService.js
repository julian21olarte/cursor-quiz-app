import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const quizPath = path.join(__dirname, "../data/quiz.json");

let cachedQuiz = null;

function loadQuiz() {
  if (!cachedQuiz) {
    const raw = readFileSync(quizPath, "utf-8");
    cachedQuiz = JSON.parse(raw);
    if (!Array.isArray(cachedQuiz?.questions) || cachedQuiz.questions.length === 0) {
      throw new Error("quiz.json must include a non-empty questions array");
    }
  }
  return cachedQuiz;
}

export function getQuizMeta() {
  const quiz = loadQuiz();
  return {
    id: quiz.id,
    title: quiz.title,
    questionCount: quiz.questions.length,
  };
}

/** Respuesta pública: sin las claves correctas (ideal para el curso). */
export function getQuizForClient() {
  const quiz = loadQuiz();
  return {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questions: quiz.questions.map(({ id, text, options }) => ({
      id,
      text,
      options,
    })),
  };
}

export function gradeQuiz(answers) {
  const quiz = loadQuiz();
  const answerMap = new Map(
    (answers ?? []).map((a) => [a.questionId, a.optionId])
  );

  const results = quiz.questions.map((q) => {
    const selected = answerMap.get(q.id) ?? null;
    const correct = selected === q.correctOptionId;
    return {
      questionId: q.id,
      selectedOptionId: selected,
      correctOptionId: q.correctOptionId,
      correct,
    };
  });

  const score = results.filter((r) => r.correct).length;
  const total = results.length;

  return {
    quizId: quiz.id,
    score,
    total,
    percentage: total === 0 ? 0 : Math.round((score / total) * 100),
    results,
  };
}
