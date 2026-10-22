function readErrorMessage(body, fallback) {
  if (body?.error && typeof body.error === "object" && body.error.message) {
    return body.error.message;
  }
  if (typeof body?.error === "string") {
    return body.error;
  }
  return fallback;
}

export async function fetchQuiz() {
  const res = await fetch("/api/quiz");
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(readErrorMessage(body, "Could not load the quiz."));
  }
  return res.json();
}

export async function submitQuiz(answers) {
  const res = await fetch("/api/quiz/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(readErrorMessage(body, "Could not submit answers."));
  }
  return res.json();
}
