import cors from "cors";
import express from "express";
import { getQuizForClient, gradeQuiz } from "./quizService.js";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "cursor-quiz-api" });
});

app.get("/api/quiz", (_req, res) => {
  res.json(getQuizForClient());
});

app.post("/api/quiz/submit", (req, res) => {
  const { answers } = req.body ?? {};

  if (!Array.isArray(answers)) {
    res.status(400).json({ error: "Se esperaba un arreglo 'answers'." });
    return;
  }

  if (answers.length === 0) {
    res.status(400).json({ error: "The answers array cannot be empty." });
    return;
  }

  const invalid = answers.some(
    (a) => !a || typeof a.questionId !== "string" || typeof a.optionId !== "string"
  );
  if (invalid) {
    res.status(400).json({
      error: "Cada respuesta debe tener questionId y optionId (string).",
    });
    return;
  }

  const questionIds = answers.map((a) => a.questionId);
  if (new Set(questionIds).size !== questionIds.length) {
    res.status(400).json({ error: "Duplicate questionId values are not allowed." });
    return;
  }

  res.json(gradeQuiz(answers));
});

app.listen(PORT, () => {
  console.log(`API del quiz escuchando en http://localhost:${PORT}`);
});
