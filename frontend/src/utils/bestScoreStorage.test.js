import test from "node:test";
import assert from "node:assert/strict";
import { pickBestScore } from "./bestScoreStorage.js";

test("pickBestScore returns current when no previous", () => {
  assert.equal(pickBestScore(null, 4), 4);
});

test("pickBestScore keeps higher score", () => {
  assert.equal(pickBestScore(5, 3), 5);
  assert.equal(pickBestScore(2, 5), 5);
});

test("pickBestScore ignores invalid current", () => {
  assert.equal(pickBestScore(3, NaN), 3);
  assert.equal(pickBestScore(null, "x"), null);
});

test("regression: recorded best is not replaced by a lower score", () => {
  const recordedBest = 8;
  const worseAttempt = 6;
  assert.equal(
    pickBestScore(recordedBest, worseAttempt),
    recordedBest,
    "must use max semantics, not min"
  );
});
