# Ejercicio 12 — Solo lo que TÚ debes hacer (≈10 min)

Todo lo demás (repo, PR, CI verde, branch protection, run-log, zip base, reflexión) ya está preparado en el proyecto.

## Paso 1 — Captura del Cloud Agent (obligatorio para la nota)

El corrector exige un **Run ID real** de Cursor; no se puede inventar.

1. Abre **Cursor** → panel **Cloud Agents** (o historial de agentes en la nube).
2. Localiza el run relacionado con este repo (`cursor-quiz-app`) o la tarea README / PR #1.
   - Si no hay run en la nube: lanza **un** Cloud Agent con el texto de `autonomous/CLOUD-AGENT-PROMPT.md` contra el repo en GitHub (solo debe tocar `README`; la PR #1 ya existe, puede que el agente no haga cambios nuevos — igual sirve el run).
3. Copia el **Run ID** que muestra la UI.
4. Abre `autonomous/run-log.txt` y sustituye `PASTE_FROM_CURSOR_AGENTS_UI` por ese Run ID.
5. Guarda una captura de pantalla del panel con el Run ID visible como:
   `deliverables/exercise-12-cloud-agent-run-id.png`

## Paso 2 — Captura de branch protection (obligatorio)

1. En el navegador (sesión iniciada como `julian21olarte`):
   https://github.com/julian21olarte/cursor-quiz-app/settings/branches
2. Debe verse la regla de **`main`** con PR obligatoria y check **`test`**.
3. Captura → `deliverables/exercise-12-branch-protection.png`

## Paso 3 — Regenerar el zip y subir al LMS

En Terminal:

```bash
cd /Users/julianolarte/proyectos/cursor-app/deliverables
zip -f exercise-12-cloud-agent-gates-REVISION.zip \
  exercise-12-cloud-agent-reflection.md \
  exercise-12-revision-deliverables.txt \
  exercise-12-TU-PASOS-ES.md \
  ../AUTONOMOUS_ROLLBACK.md \
  ../autonomous/run-log.txt \
  ../autonomous/verification-output.txt \
  exercise-12-cloud-agent-run-id.png \
  exercise-12-branch-protection.png
```

Sube **`exercise-12-cloud-agent-gates-REVISION.zip`** a la plataforma del curso.

---

**Opcional:** si quieres dejar el repo al día en GitHub después del Run ID:

```bash
cd /Users/julianolarte/proyectos/cursor-app
git add autonomous/run-log.txt deliverables/
git commit -m "docs: exercise 12 run-log and deliverables"
git push origin main
```

No hace falta mergear la PR #1 para entregar el ejercicio.
