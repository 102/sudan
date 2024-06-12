/**
 * @param {bigint} n
 * @param {bigint} x
 * @param {bigint} y
 * @returns {bigint}
 */
export function F(...args) {
  const cache = new Map();

  return (function _F(n, x, y) {
    const cacheKey = [n, x, y].join();

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (n === 0n) {
      return x + y;
    }

    if (y === 0n) {
      return x;
    }

    const result = _F(n - 1n, _F(n, x, y - 1n), _F(n, x, y - 1n) + y);

    cache.set(cacheKey, result);

    return result;
  })(...args);
}
