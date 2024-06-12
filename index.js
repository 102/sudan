/**
 * @param {bigint} n
 * @param {bigint} x
 * @param {bigint} y
 * @returns {bigint}
 */
export function F(n, x, y) {
  const cache = new Map();

  return (function _F(_n, _x, _y) {
    const cacheKey = [_n, _x, _y].join();

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (_n === 0n) {
      return _x + _y;
    }

    if (_y === 0n) {
      return _x;
    }

    const result = _F(_n - 1n, _F(_n, _x, _y - 1n), _F(_n, _x, _y - 1n) + _y);

    cache.set(cacheKey, result);

    return result;
  })(n, x, y);
}
