// Import dependencies.
import { readFileSync } from "fs";

// Parse puzzle input.
interface Line {
  start: [number, number];
  end: [number, number];
}

const file = readFileSync("./2021/day05/input", { encoding: "utf-8" });

const lines: Line[] = [];
file.split("\n").forEach((item) => {
  const split = item.split(" -> ");
  lines.push({
    start: [+split[0].split(",")[0], +split[0].split(",")[1]],
    end: [+split[1].split(",")[0], +split[1].split(",")[1]],
  });
});

// Helper for creating a blank board.
const createBoard = (size: number): number[][] => {
  const board: number[][] = [];

  for (let i = 0; i < size; i++) {
    board.push(Array.from({ length: size }, (v, k) => 0));
  }

  return board;
};

// Logic for Part One.
const partOne = (lines: Line[]): number => {
  const board = createBoard(1000);

  for (const line of lines) {
    if (line.start[0] === line.end[0]) {
      // x1 == x2
      // Increment all y-values.
      const min = Math.min(line.start[1], line.end[1]);
      const max = Math.max(line.start[1], line.end[1]);

      for (let i = min; i <= max; i++) {
        board[i][line.start[0]] += 1;
      }
    }

    if (line.start[1] === line.end[1]) {
      // y1 == y2
      // Increment all x-values.
      const min = Math.min(line.start[0], line.end[0]);
      const max = Math.max(line.start[0], line.end[0]);

      for (let i = min; i <= max; i++) {
        board[line.start[1]][i] += 1;
      }
    }
  }

  let count = 0;
  for (let x = 0; x < board.length; x++) {
    count += board[x].filter((item) => item >= 2).length;
  }

  return count;
};

// Logic for Part Two.
const partTwo = (lines: Line[]): number => {
  return 0;
};

// Run both parts against the given input.
console.log(`Part One = ${partOne(lines)}`);
console.log(`Part Two = ${partTwo(lines)}`);
