import test from "node:test";
import assert from "node:assert/strict";
import { formatPercentage } from "./formatPercentage.js";

test("formatPercentage formats score and rounded percent", () => {
  assert.equal(formatPercentage(3, 5), "3/5 (60%)");
});

test("formatPercentage handles zero total", () => {
  assert.equal(formatPercentage(0, 0), "0/0 (0%)");
});

test("formatPercentage rounds percent like backend gradeQuiz", () => {
  assert.equal(formatPercentage(1, 3), "1/3 (33%)");
});
