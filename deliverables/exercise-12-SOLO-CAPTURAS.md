# Ejercicio 12 — Solo capturas (2 archivos)

Todo lo demás ya está hecho: repo, PR #1, CI verde, branch protection (API), run-log, verify-gate, zip.

El README con **Quick reference** se hizo en **Agent Mode local** (commit `42c1218`), no hubo run en Cloud Agents. El run-log documenta esa evidencia.

## Captura 1 — Branch protection

1. Abre (logueado en GitHub):  
   https://github.com/julian21olarte/cursor-quiz-app/settings/branches  
2. Debe verse la regla de **`main`** (PR + check **test**).  
3. Guarda como: **`deliverables/exercise-12-branch-protection.png`**

## Captura 2 — Evidencia del agente (elige A o B)

### A) Sin Cloud Agent (tu caso — recomendado)

1. Abre: https://github.com/julian21olarte/cursor-quiz-app/pull/1/files  
2. Captura donde se ve el cambio de **README** (tabla Quick reference) y, si cabe, el check **test** en verde.  
3. Guarda como: **`deliverables/exercise-12-cloud-agent-run-id.png`**  
   (mismo nombre pide el curso; el contenido es evidencia PR + agent commit, no Run ID de nube)

### B) Si el corrector exige panel Cloud Agents

1. Cursor → **Cloud Agents** → nuevo run con `autonomous/CLOUD-AGENT-PROMPT.md` en repo GitHub.  
2. Captura el **Run ID** en pantalla → mismo archivo `exercise-12-cloud-agent-run-id.png`.  
3. Pega el Run ID en `autonomous/run-log.txt` (línea Run ID).

## Subir al LMS

```bash
cd /Users/julianolarte/proyectos/cursor-app
./scripts/rebuild-exercise-12-zip.sh
```

Sube: **`deliverables/exercise-12-cloud-agent-gates-REVISION.zip`**
