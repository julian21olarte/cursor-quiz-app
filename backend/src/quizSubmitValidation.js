export const SubmitErrorCodes = {
  ANSWERS_NOT_ARRAY: "ANSWERS_NOT_ARRAY",
  ANSWERS_EMPTY: "ANSWERS_EMPTY",
  ANSWER_SHAPE_INVALID: "ANSWER_SHAPE_INVALID",
  DUPLICATE_QUESTION_ID: "DUPLICATE_QUESTION_ID",
};

export function validateSubmitAnswers(answers) {
  if (!Array.isArray(answers)) {
    return {
      ok: false,
      code: SubmitErrorCodes.ANSWERS_NOT_ARRAY,
      message: "Request body must include an 'answers' array.",
    };
  }

  if (answers.length === 0) {
    return {
      ok: false,
      code: SubmitErrorCodes.ANSWERS_EMPTY,
      message: "The answers array cannot be empty.",
    };
  }

  const invalid = answers.some(
    (a) => !a || typeof a.questionId !== "string" || typeof a.optionId !== "string"
  );
  if (invalid) {
    return {
      ok: false,
      code: SubmitErrorCodes.ANSWER_SHAPE_INVALID,
      message: "Each answer must include questionId and optionId as strings.",
    };
  }

  const questionIds = answers.map((a) => a.questionId);
  if (new Set(questionIds).size !== questionIds.length) {
    return {
      ok: false,
      code: SubmitErrorCodes.DUPLICATE_QUESTION_ID,
      message: "Duplicate questionId values are not allowed.",
    };
  }

  return { ok: true };
}
