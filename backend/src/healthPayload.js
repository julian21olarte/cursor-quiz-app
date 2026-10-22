import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagePath = path.join(__dirname, "../package.json");

const startedAt = Date.now();

export function getHealthPayload() {
  const pkg = JSON.parse(readFileSync(packagePath, "utf-8"));
  return {
    ok: true,
    service: "cursor-quiz-api",
    version: pkg.version ?? "0.0.0",
    uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
  };
}
