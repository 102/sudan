# sudan

The [Sudan function][2]. In the theory of computation, the Sudan function is an example of a function that is recursive, but not primitive recursive. This is also true of the better-known Ackermann function. The Sudan function was the first function having this property to be published.

It was discovered (and published) in 1927 by [Gabriel Sudan][1], a Romanian mathematician who was a student of David Hilbert.

## Definition

```math
\begin{array}{lll} \\
  F_0(x, y) & = x+y \\
  F_{n+1}(x,0) & = x & \text{if }n \geq 0 \\
  F_{n+1}(x,y+1) & = F_n(F_{n+1}(x,y),F_{n+1}(x,y)+y+1 & \text{if }n \geq 0
\end{array}
```

## Usage

```js
const F = require("sudan");

console.log(F(1n, 4n, 7n)); // => 759n
```

[1]: https://en.wikipedia.org/wiki/Gabriel_Sudan
[2]: https://en.wikipedia.org/wiki/Sudan_function
