import test from "node:test";
import assert from "node:assert/strict";
import {
  validateSubmitAnswers,
  SubmitErrorCodes,
} from "./quizSubmitValidation.js";

test("rejects non-array answers", () => {
  const result = validateSubmitAnswers({});
  assert.equal(result.ok, false);
  assert.equal(result.code, SubmitErrorCodes.ANSWERS_NOT_ARRAY);
});

test("rejects empty array", () => {
  const result = validateSubmitAnswers([]);
  assert.equal(result.ok, false);
  assert.equal(result.code, SubmitErrorCodes.ANSWERS_EMPTY);
});

test("rejects invalid answer shape", () => {
  const result = validateSubmitAnswers([{ questionId: "q1" }]);
  assert.equal(result.ok, false);
  assert.equal(result.code, SubmitErrorCodes.ANSWER_SHAPE_INVALID);
});

test("rejects duplicate question ids", () => {
  const result = validateSubmitAnswers([
    { questionId: "q1", optionId: "a" },
    { questionId: "q1", optionId: "b" },
  ]);
  assert.equal(result.ok, false);
  assert.equal(result.code, SubmitErrorCodes.DUPLICATE_QUESTION_ID);
});

test("accepts valid payload", () => {
  const result = validateSubmitAnswers([
    { questionId: "q1", optionId: "a" },
    { questionId: "q2", optionId: "b" },
  ]);
  assert.equal(result.ok, true);
});
