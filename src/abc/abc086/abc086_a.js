const fs = require("fs");

/**
 * A - Product
 *
 * @see https://atcoder.jp/contests/abc086/tasks/abc086_a
 *
 * @param {string} input stdin
 */
((input = fs.readFileSync("/dev/stdin", "utf8")) => {
  const [a, b] = input.split(/\s/).map(Number);

  console.log((a * b) % 2 ? "Odd" : "Even");
})();
