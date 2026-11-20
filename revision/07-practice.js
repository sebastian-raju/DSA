/*
================================ RECAP ================================

CONFIDENCE ROUND: no new ideas here. Every problem uses something you
already did in lessons 1-6. They start easy and get harder.

Before writing ANY code, answer these in your head (or as a comment):
  1. What's my STARTING value?             (0? null? -Infinity? [] ?)
  2. What's the CONDITION to update it?
  3. What do I return, and when?           (inside the loop or after it?)
  4. For patterns: make the TABLE first    (row | spaces | stars)
  5. Trace it by hand with a TINY input    (n = 2, or a 3-element array)

If a check fails, read the "got ... expected ..." line and ask:
  "what does this wrong output tell me?" (like ["**","**",""] in 6.6)

========================================================================
*/
const { check, section } = require("./check");

// ---------------------- LEVEL 1: warm-up ----------------------

// EXERCISE 7.1: return the sum of only the EVEN numbers.
// sumOfEvens([1, 2, 3, 4, 5, 6]) -> 12   (2 + 4 + 6)
// (pattern from: 04 running answer + 02 modulo)
function sumOfEvens(arr) {
  let sum = 0;
  for (const val of arr) {
    if (val % 2 === 0) {
      sum += val;
    }
  }
  return sum;
}

// EXERCISE 7.2: return how many numbers are between low and high
// (INCLUDING low and high themselves).
// countInRange([1, 5, 10, 15, 20], 5, 15) -> 3   (5, 10, 15)
function countInRange(arr, low, high) {
  // your code here
  let count = 0;
  for (const val of arr) {
    if (val >= low && val <= high) {
      count++;
    }
  }
  return count;
}

// ---------------------- LEVEL 2: think first ----------------------

// EXERCISE 7.3 (predict, don't run): how many times does "hi" print?
//
//   for (let i = 0; i < 4; i++) {
//     for (let j = i + 1; j < 4; j++) {
//       console.log("hi");
//     }
//   }
//
// Hint: write a table: for i = 0, j goes from ? to ?, that's ? times...
const answer73 = 6; // <- replace 0 with your answer

// EXERCISE 7.4: return the LARGEST EVEN number, or null if there are none.
// largestEven([3, 8, 5, 12, 7]) -> 12
// largestEven([1, 3, 5])        -> null
// (careful: remember what you learned about -Infinity in lesson 5!)
function largestEven(arr) {
  let largest = -Infinity;
  for (const val of arr) {
    if (val > largest && val % 2 === 0) {
      largest = val;
    }
  }
  return largest === -Infinity ? null : largest;
}

// EXERCISE 7.5: return the difference between the largest and the
// smallest number, using ONE loop (no Math.max / Math.min / sort).
// Return null for an empty array.
// range([4, 9, 1, 7]) -> 8   (9 - 1)
// (pattern from: 05 tracking two values at once)
function range(arr) {
  let largest = -Infinity;
  let smallest = Infinity;
  for (const val of arr) {
    if (val > largest) {
      largest = val;
    }
    if (val < smallest) {
      smallest = val;
    }
  }
  return largest === -Infinity && smallest === Infinity
    ? null
    : largest - smallest;
}

// ---------------------- LEVEL 3: nested loops ----------------------

// EXERCISE 7.6: count how many PAIRS of different positions add up to target.
// countPairs([1, 2, 3, 4], 5) -> 2   (1+4, 2+3)
// countPairs([2, 2, 2], 4)    -> 3   (positions 0+1, 0+2, 1+2)
// (pattern from: 6.5 hasDuplicate, but COUNT instead of returning early)
function countPairs(arr, target) {
  // your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        count++;
      }
    }
  }
  return count;
}

// EXERCISE 7.7: centered pyramid. No trailing spaces.
// pyramid(3) -> ["  *", " ***", "*****"]
// Make the table first: row | spaces | stars. Stars is the new formula!
// (pattern from: 6.6 rightTriangle)
function pyramid(n) {
  // your code here
  let pattern = [];
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = n - i; j > 0; j--) {
      temp += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      temp += "*";
    }
    pattern.push(temp);
  }
  return pattern;
}

// ---------------------- LEVEL 4: challenge ----------------------

// EXERCISE 7.8 (challenge): hollow square. Border is stars, inside is spaces.
// hollowSquare(4) -> ["****",
//                     "*  *",
//                     "*  *",
//                     "****"]
// hollowSquare(1) -> ["*"]
// Hint: for each position (row i, column j), ask "is this on the border?"
function hollowSquare(n) {
  // your code here
  let pattern = [];
  for (let i = 1; i <= n; i++) {
    let temp = "";
    if (i === 1 || i === n) {
      for (let j = 1; j <= n; j++) {
        temp += "*";
      }
    } else {
      for(let j=1; j<=n; j++){
        if(j === 1 || j === n){
          temp += "*"
        } else {
          temp += " "
        }
      }
    }
    pattern.push(temp);
  }
  return pattern;
}

// ---------------------------- checks ----------------------------
section("7.1 sumOfEvens");
check("sumOfEvens([1, 2, 3, 4, 5, 6])", sumOfEvens([1, 2, 3, 4, 5, 6]), 12);
check("sumOfEvens([1, 3, 5])", sumOfEvens([1, 3, 5]), 0);
check("sumOfEvens([-2, -3, 4])", sumOfEvens([-2, -3, 4]), 2);
check("sumOfEvens([])", sumOfEvens([]), 0);

section("7.2 countInRange");
check(
  "countInRange([1, 5, 10, 15, 20], 5, 15)",
  countInRange([1, 5, 10, 15, 20], 5, 15),
  3,
);
check("countInRange([1, 2, 3], 10, 20)", countInRange([1, 2, 3], 10, 20), 0);
check("countInRange([-5, 0, 5], -5, 5)", countInRange([-5, 0, 5], -5, 5), 3);

section("7.3 predict the loop");
let hiCount = 0;
for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) hiCount++;
check("your answer", answer73 === hiCount, true);

section("7.4 largestEven");
check("largestEven([3, 8, 5, 12, 7])", largestEven([3, 8, 5, 12, 7]), 12);
check("largestEven([-7, -4, -10])", largestEven([-7, -4, -10]), -4);
check(
  "largestEven([1, 3, 5]) is REALLY null",
  largestEven([1, 3, 5]) === null,
  true,
);
check("largestEven([]) is REALLY null", largestEven([]) === null, true);

section("7.5 range");
check("range([4, 9, 1, 7])", range([4, 9, 1, 7]), 8);
check("range([5])", range([5]), 0);
check("range([-3, -8, -1])", range([-3, -8, -1]), 7);
check("range([]) is REALLY null", range([]) === null, true);

section("7.6 countPairs");
check("countPairs([1, 2, 3, 4], 5)", countPairs([1, 2, 3, 4], 5), 2);
check("countPairs([2, 2, 2], 4)", countPairs([2, 2, 2], 4), 3);
check("countPairs([1, 2], 10)", countPairs([1, 2], 10), 0);
check("countPairs([3], 6)  (one element, no pairs)", countPairs([3], 6), 0);

section("7.7 pyramid");
check("pyramid(1)", pyramid(1), ["*"]);
check("pyramid(3)", pyramid(3), ["  *", " ***", "*****"]);
check("pyramid(4)", pyramid(4), ["   *", "  ***", " *****", "*******"]);

section("7.8 hollowSquare");
check("hollowSquare(1)", hollowSquare(1), ["*"]);
check("hollowSquare(2)", hollowSquare(2), ["**", "**"]);
check("hollowSquare(4)", hollowSquare(4), ["****", "*  *", "*  *", "****"]);

// Bonus: once 7.7 passes, uncomment to see it printed.
// pyramid(5).forEach((row) => console.log(row));
