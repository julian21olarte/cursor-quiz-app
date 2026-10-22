import cors from "cors";
import express from "express";
import { sendApiError } from "./apiErrors.js";
import { getQuizForClient, getQuizMeta, gradeQuiz } from "./quizService.js";
import { validateSubmitAnswers } from "./quizSubmitValidation.js";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "cursor-quiz-api" });
});

app.get("/api/quiz/meta", (_req, res) => {
  try {
    res.json(getQuizMeta());
  } catch {
    sendApiError(
      res,
      500,
      "QUIZ_LOAD_FAILED",
      "Quiz metadata could not be loaded."
    );
  }
});

app.get("/api/quiz", (_req, res) => {
  try {
    res.json(getQuizForClient());
  } catch {
    sendApiError(res, 500, "QUIZ_LOAD_FAILED", "Quiz could not be loaded.");
  }
});

app.post("/api/quiz/submit", (req, res) => {
  const { answers } = req.body ?? {};
  const validation = validateSubmitAnswers(answers);

  if (!validation.ok) {
    sendApiError(res, 400, validation.code, validation.message);
    return;
  }

  res.json(gradeQuiz(answers));
});

app.use((_req, res) => {
  sendApiError(res, 404, "NOT_FOUND", "Route not found.");
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    sendApiError(res, 400, "INVALID_JSON", "Request body must be valid JSON.");
    return;
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`API del quiz escuchando en http://localhost:${PORT}`);
});
