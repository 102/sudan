let assert = require("assert");
let F = require("./index");

let cases = [
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 2, 0, 2],
  [0, 2, 2, 4],
  [0, 5, 6, 11],
  [1, 4, 7, 759],
  [1, 8, 8, 2550],
  [1, 9, 14, 180208],
  [1, 14, 14, 262128],
  [2, 1, 1, 8],
  [2, 5, 1, 440],
  [2, 1, 2, 10228],
  [2, 2, 2, 15569256417],
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
