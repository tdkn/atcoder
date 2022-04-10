import * as fs from "fs";

/**
 * A - Takoyaki
 *
 * @see https://atcoder.jp/contests/abc176/tasks/abc176_a
 */
((input: string = fs.readFileSync("/dev/stdin", "utf8")) => {
  const [N, X, T] = input.split(/\s/).map(Number);

  console.log(Math.ceil(N / X) * T);
})();
