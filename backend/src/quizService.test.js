import test from "node:test";
import assert from "node:assert/strict";
import { getQuizMeta } from "./quizService.js";

test("getQuizMeta exposes id and questionCount from quiz.json", () => {
  const meta = getQuizMeta();
  assert.equal(typeof meta.id, "string");
  assert.ok(meta.id.length > 0);
  assert.equal(typeof meta.title, "string");
  assert.ok(meta.questionCount >= 1);
  assert.equal(meta.questionCount, 5);
});
