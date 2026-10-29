# Guía de reenvío (ejercicio 12) — lee esto primero

El feedback 52/100 pide **ejecución real**, no simulación. Sigue estos pasos **en orden** y luego rellena `autonomous/run-log.txt` y el zip.

## 1. Baseline humano (ya en el repo)

En `main` deben estar **antes** del Agent:

- `AUTONOMOUS_ROLLBACK.md`
- `.github/workflows/test-all.yml`
- `scripts/verify-gate.sh`

El Agent **solo** toca `README.md` (tabla Quick reference).

## 2. Subir a GitHub

```bash
cd /Users/julianolarte/proyectos/cursor-app
git add AUTONOMOUS_ROLLBACK.md CHANGELOG.md .github docs scripts autonomous docs
git commit -m "chore: human baseline for autonomous exercise (rollback + CI gate)"
git remote add origin https://github.com/TU_USUARIO/cursor-app.git   # si no existe
git push -u origin main
```

## 3. Branch protection

Sigue `docs/GITHUB-BRANCH-PROTECTION.md` y guarda screenshot `exercise-12-branch-protection.png`.

## 4. Evidencia de gate que falla y luego pasa

```bash
chmod +x scripts/verify-gate.sh
# (opcional) rompe un test un momento, corre verify-gate → exit 1
./scripts/verify-gate.sh   # debe terminar en exit 0 en main sano
```

Guarda `autonomous/verification-output.txt`. Usa `autonomous/verification-output-FAIL-EXAMPLE.txt` como modelo del fail en el run-log.

## 5. Cloud Agent real

1. Cursor → **Cloud Agents** (repo en GitHub conectado).
2. Pega el prompt de `autonomous/CLOUD-AGENT-PROMPT.md`.
3. Copia el **Run ID** real → `autonomous/run-log.txt`.
4. Screenshot del panel → `exercise-12-cloud-agent-run-id.png`.

## 6. PR real

- El Agent (o tú) abre PR a `main`.
- Cuerpo del PR: usa `autonomous/PR-BODY-TEMPLATE.md` con output **real** de verify-gate.
- Copia PR URL y Actions URL al run-log.

## 7. Zip para la plataforma

```bash
cd deliverables
zip exercise-12-cloud-agent-gates-REVISION.zip \
  exercise-12-cloud-agent-reflection.md \
  exercise-12-revision-deliverables.txt \
  ../AUTONOMOUS_ROLLBACK.md \
  ../autonomous/run-log.txt \
  ../autonomous/verification-output.txt \
  exercise-12-cloud-agent-run-id.png \
  exercise-12-branch-protection.png
```

**No subas** el zip hasta que `run-log.txt` no tenga placeholders ALL_CAPS.
