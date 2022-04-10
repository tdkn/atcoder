import * as fs from "fs";

/**
 * A - Shampoo
 *
 * @see https://atcoder.jp/contests/abc243/tasks/abc243_a
 */
((input = fs.readFileSync("/dev/stdin", "utf8")) => {
  let [V, A, B, C] = input.split(/\s/).map(Number);

  while (0 <= V) {
    if ((V -= A) < 0) return console.log("F");
    if ((V -= B) < 0) return console.log("M");
    if ((V -= C) < 0) return console.log("T");
  }
})();
