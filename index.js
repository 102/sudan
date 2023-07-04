/**
 * @param {bigint} n
 * @param {bigint} x
 * @param {bigint} y
 * @returns {bigint}
 */
export function F(n, x, y) {
  if (n === 0n) {
    return x + y;
  }

  if (y === 0n) {
    return x;
  }

  return F(n - 1n, F(n, x, y - 1n), F(n, x, y - 1n) + y);
}
