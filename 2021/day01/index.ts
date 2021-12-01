// Import dependencies.
import { readFileSync } from "fs";

// Read puzzle input.
// Format is an array of numbers.
const file = readFileSync("./2021/day01/input", { encoding: "utf-8" });
const input = file.split("\n").map((item) => +item);

// Logic for Part One.
const partOne = (input: number[]): number => {
  let counter = 0;
  let previous = Infinity;

  for (const item of input) {
    if (item > previous) counter++;
    previous = item;
  }

  return counter;
};

// Logic for Part Two.
const partTwo = (input: number[]): number => {
  let counter = 0;
  let previous = Infinity;

  for (let i = 0; i < input.length; i++) {
    if (i + 2 <= input.length) {
      const sum = input[i] + input[i + 1] + input[i + 2];

      if (sum > previous) counter++;
      previous = sum;
    }
  }

  return counter;
};

// Run both parts against the given input.
console.log(`Part One = ${partOne(input)}`);
console.log(`Part Two = ${partTwo(input)}`);
