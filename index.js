/**
 * The Sudan function implementation. This is an example of
 * a function that is recursive, but not primitive recursive
 *
 * @param {bigint} n
 * @param {bigint} x
 * @param {bigint} y
 * @returns {bigint}
 */
function F(n, x, y) {
  if (n === 0n) {
    return x + y;
  }

  if (y === 0n) {
    return x;
  }

  return F(n - 1n, F(n, x, y - 1n), F(n, x, y - 1n) + y);
}

module.exports = F;
