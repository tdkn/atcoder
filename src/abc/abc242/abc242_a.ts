import * as fs from "fs";

((input = fs.readFileSync("/dev/stdin", "utf8")) => {
  const [A, B, C, X] = input.split(/\s/).map(Number);
  const [isWinner, isRandom] = [X <= A, A + 1 <= X && X <= B];

  console.log(isWinner ? 1 : isRandom ? C / (B - A) : 0);
})();
