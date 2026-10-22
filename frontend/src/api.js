export async function fetchQuiz() {
  const res = await fetch("/api/quiz");
  if (!res.ok) {
    throw new Error("No se pudo cargar el quiz.");
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
    throw new Error(body.error ?? "Error al enviar respuestas.");
  }
  return res.json();
}
