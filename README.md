# Cursor Quiz App

Proyecto pequeño **Node + React** para practicar tareas del curso de Cursor: editar código con el agente, entender la estructura FE/BE y resolver preguntas sobre el flujo de trabajo.

## Estructura

```
cursor-app/
├── backend/          # API Express (puerto 4000)
│   ├── data/quiz.json
│   └── src/
├── frontend/         # React + Vite (puerto 5173)
│   └── src/
└── package.json      # Scripts para levantar todo junto
```

## Quick reference

| Action | Command / URL |
|--------|----------------|
| Install dependencies | `npm run install:all` |
| Run API + frontend | `npm run dev` |
| Verification gate | `./scripts/verify-gate.sh` or `npm run test:all` |
| API health | http://localhost:4000/api/health |
| Quiz UI | http://localhost:5173 |

## Requisitos

- Node.js 18+ (recomendado 20+)

## Primer arranque

```bash
cd cursor-app
npm run install:all
npm run dev
```

- **Frontend:** http://localhost:5173  
- **API:** http://localhost:4000/api/health  

El proxy de Vite reenvía `/api/*` al backend, así el frontend no necesita CORS en desarrollo.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | `{ ok, service, version, uptimeSeconds }` |
| GET | `/api/quiz` | Preguntas (sin respuestas correctas) |
| GET | `/api/quiz/meta` | `{ id, title, questionCount }` (sin preguntas) |
| POST | `/api/quiz/submit` | Body: `{ "answers": [{ "questionId", "optionId" }] }` |

Errores HTTP usan `{ "error": { "code", "message" } }` (ver `backend/src/apiErrors.js`).

## Tests

```bash
npm run test:all
```

Score labels in the UI use `formatPercentage()` (`frontend/src/utils/formatPercentage.js`) so displayed percentages match backend rounding.

## Ideas de ejercicios para el curso

1. Agregar una sexta pregunta en `backend/data/quiz.json`.
2. En el FE, deshabilitar el botón hasta que todas las opciones estén marcadas (sin depender solo del mensaje de error).
3. Endpoint nuevo: listado de quizzes o modo “una pregunta al azar”.
4. Regla en Cursor Rules que pida siempre responder en español en este repo.
5. Test unitario simple para `gradeQuiz` en el backend (tarea avanzada).

## Scripts útiles

```bash
npm run dev:backend    # solo API
npm run dev:frontend   # solo React
```
