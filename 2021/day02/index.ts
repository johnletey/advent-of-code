// Import dependencies.
import { readFileSync } from "fs";

// Read puzzle input.
type Input = {
  command: "forward" | "down" | "up";
  amount: number;
}[];

const file = readFileSync("./2021/day02/input", { encoding: "utf-8" });
const input = file.split("\n").map((item) => ({
  command: item.split(" ")[0],
  amount: +item.split(" ")[1],
})) as Input;

// Logic for Part One.
const partOne = (input: Input): number => {
  let horizontalPosition = 0,
    depth = 0;

  for (const item of input) {
    if (item.command === "forward") {
      horizontalPosition += item.amount;
    }

    if (item.command === "down") {
      depth += item.amount;
    }

    if (item.command === "up") {
      depth -= item.amount;
    }
  }

  return horizontalPosition * depth;
};

// Logic for Part Two.
const partTwo = (input: Input): number => {
  let horizontalPosition = 0,
    depth = 0,
    aim = 0;

  for (const item of input) {
    if (item.command === "forward") {
      horizontalPosition += item.amount;
      depth += aim * item.amount;
    }

    if (item.command === "down") {
      aim += item.amount;
    }

    if (item.command === "up") {
      aim -= item.amount;
    }
  }

  return horizontalPosition * depth;
};

// Run both parts against the given input.
console.log(`Part One = ${partOne(input)}`);
console.log(`Part Two = ${partTwo(input)}`);
