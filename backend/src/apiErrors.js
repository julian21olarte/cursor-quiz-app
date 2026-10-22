export function apiErrorBody(code, message, details = undefined) {
  const body = { error: { code, message } };
  if (details !== undefined) {
    body.error.details = details;
  }
  return body;
}

export function sendApiError(res, status, code, message, details) {
  res.status(status).json(apiErrorBody(code, message, details));
}
