// Import dependencies.
import { readFileSync } from "fs";

// Read puzzle input.
// Format is an array of strings.
const file = readFileSync("./2021/day03/input", { encoding: "utf-8" });
const input = file.split("\n");

// Logic for Part One.
const partOne = (input: string[]): number => {
  let gammaRate = "", epsilonRate = "";

  for (let i = 0; i < input[0].length; i++) {
    const zeros = input.map((item) => +item[i]).filter((item) => item === 0).length;
    const ones = input.map((item) => +item[i]).filter((item) => item === 1).length;

    gammaRate = gammaRate.concat(zeros > ones ? "0" : "1");
    epsilonRate = epsilonRate.concat(zeros > ones ? "1" : "0");
  }

  console.log(gammaRate, epsilonRate);

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

// Logic for Part Two.
const partTwo = (input: string[]): number => {
  let vals: string[] = input;
  let i = 0;
  
  // Determine oxygen generator rating.
  while (vals.length > 1) {
    const digits = vals.map((item) => +item[i]);
    const zeros = digits.filter((item) => item === 0).length;
    const ones = digits.filter((item) => item === 1).length;

    if (zeros > ones) {
      vals = vals.filter((item) => +item[i] === 0);
    } else {
      vals = vals.filter((item) => +item[i] === 1);
    }

    i++;
  }
  
  const oxygenGeneratorRating = parseInt(vals[0], 2);

  // Reset values.
  vals = input;
  i = 0;

  // Determine CO2 scrubber rating.
  while (vals.length > 1) {
    const digits = vals.map((item) => +item[i]);
    const zeros = digits.filter((item) => item === 0).length;
    const ones = digits.filter((item) => item === 1).length;

    if (zeros > ones) {
      vals = vals.filter((item) => +item[i] === 1);
    } else {
      vals = vals.filter((item) => +item[i] === 0);
    }

    i++;
  }
  
  const c02ScrubberRating = parseInt(vals[0], 2);

  // Return.
  return oxygenGeneratorRating * c02ScrubberRating;
};

// Run both parts against the given input.
console.log(`Part One = ${partOne(input)}`);
console.log(`Part Two = ${partTwo(input)}`);
