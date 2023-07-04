import assert from "node:assert";
import { F } from "./index.js";

let cases = [
  [0n, 0n,  0n, 0n],
  [0n, 1n,  0n, 1n],
  [0n, 2n,  0n, 2n],
  [0n, 2n,  2n, 4n],
  [0n, 5n,  6n, 11n],
  [1n, 4n,  7n, 759n],
  [1n, 8n,  8n, 2550n],
  [1n, 9n,  14n, 180208n],
  [1n, 14n, 14n, 262128n],
  [2n, 1n,  1n, 8n],
  [2n, 5n,  1n, 440n],
  [2n, 1n,  2n, 10228n],
  [2n, 2n,  2n, 15569256417n],
];

cases.forEach(([n, x, y, expected]) => {
  try {
    assert.strictEqual(F(n, x, y), expected);
    console.log("✓", { n, x, y }, "⇒", expected);
  } catch (error) {
    if (error instanceof assert.AssertionError) {
      console.log("X", { n, x, y }, "⇒", expected, error.message);
      process.exitCode = 1;
    } else {
      throw error;
    }
  }
});
