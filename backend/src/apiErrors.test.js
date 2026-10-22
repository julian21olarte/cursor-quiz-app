import test from "node:test";
import assert from "node:assert/strict";
import { apiErrorBody } from "./apiErrors.js";

test("apiErrorBody nests code and message", () => {
  const body = apiErrorBody("TEST_CODE", "Something failed");
  assert.deepEqual(body, {
    error: { code: "TEST_CODE", message: "Something failed" },
  });
});

test("apiErrorBody includes details when provided", () => {
  const body = apiErrorBody("TEST_CODE", "Fail", { field: "answers" });
  assert.equal(body.error.details.field, "answers");
});
