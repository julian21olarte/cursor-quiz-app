import test from "node:test";
import assert from "node:assert/strict";
import { getHealthPayload } from "./healthPayload.js";

test("getHealthPayload includes service, version, uptimeSeconds", () => {
  const body = getHealthPayload();
  assert.equal(body.ok, true);
  assert.equal(body.service, "cursor-quiz-api");
  assert.equal(body.version, "1.0.0");
  assert.equal(typeof body.uptimeSeconds, "number");
  assert.ok(body.uptimeSeconds >= 0);
});
