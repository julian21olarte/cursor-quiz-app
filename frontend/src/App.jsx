import { useCallback, useEffect, useState } from "react";
import { fetchQuiz, submitQuiz } from "./api.js";
import "./App.css";

function App() {
  const [quiz, setQuiz] = useState(null);
  const [selections, setSelections] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchQuiz();
        if (!cancelled) setQuiz(data);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const onSelect = useCallback((questionId, optionId) => {
    setSelections((prev) => ({ ...prev, [questionId]: optionId }));
    setResult(null);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!quiz) return;

    const answers = quiz.questions.map((q) => ({
      questionId: q.id,
      optionId: selections[q.id] ?? "",
    }));

    const missing = answers.some((a) => !a.optionId);
    if (missing) {
      setError("Responde todas las preguntas antes de enviar.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const graded = await submitQuiz(answers);
      setResult(graded);
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const onRetry = () => {
    setSelections({});
    setResult(null);
    setError(null);
  };

  if (loading) {
    return (
      <div className="layout">
        <p className="muted">Cargando quiz…</p>
      </div>
    );
  }

  if (error && !quiz) {
    return (
      <div className="layout">
        <div className="card error">
          <p>{error}</p>
          <p className="hint">
            ¿Está corriendo la API? Desde la raíz: <code>npm run dev</code>
          </p>
        </div>
      </div>
    );
  }

  const resultByQuestion = result
    ? Object.fromEntries(result.results.map((r) => [r.questionId, r]))
    : {};

  return (
    <div className="layout">
      <header className="hero">
        <span className="badge">Curso Cursor</span>
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>
      </header>

      {error && (
        <div className="banner error" role="alert">
          {error}
        </div>
      )}

      <form className="quiz" onSubmit={onSubmit}>
        {quiz.questions.map((q, index) => {
          const feedback = resultByQuestion[q.id];
          return (
            <fieldset
              key={q.id}
              className={`card question ${feedback ? (feedback.correct ? "ok" : "bad") : ""}`}
            >
              <legend>
                <span className="num">{index + 1}</span>
                {q.text}
              </legend>
              <ul className="options">
                {q.options.map((opt) => {
                  const checked = selections[q.id] === opt.id;
                  const showCorrect =
                    result && feedback?.correctOptionId === opt.id;
                  const showWrong =
                    result && checked && !feedback?.correct;
                  return (
                    <li key={opt.id}>
                      <label className={checked ? "selected" : ""}>
                        <input
                          type="radio"
                          name={q.id}
                          value={opt.id}
                          checked={checked}
                          disabled={!!result}
                          onChange={() => onSelect(q.id, opt.id)}
                        />
                        <span>{opt.text}</span>
                        {showCorrect && (
                          <span className="tag ok">Correcta</span>
                        )}
                        {showWrong && (
                          <span className="tag bad">Incorrecta</span>
                        )}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          );
        })}

        <footer className="actions">
          {!result ? (
            <button type="submit" disabled={submitting}>
              {submitting ? "Enviando…" : "Enviar respuestas"}
            </button>
          ) : (
            <div className="score-panel">
              <p className="score">
                Puntaje: <strong>{result.score}</strong> / {result.total} (
                {result.percentage}%)
              </p>
              <button type="button" className="secondary" onClick={onRetry}>
                Intentar de nuevo
              </button>
            </div>
          )}
        </footer>
      </form>

      <aside className="course-note card">
        <h2>Ideas para tareas del curso</h2>
        <ul>
          <li>Añadir una pregunta nueva en <code>backend/data/quiz.json</code></li>
          <li>Mostrar un temporizador en el frontend</li>
          <li>Guardar el mejor puntaje en <code>localStorage</code></li>
          <li>Crear un endpoint <code>GET /api/quiz/random</code></li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
