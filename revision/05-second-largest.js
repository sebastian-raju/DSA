/*
================================ RECAP ================================

This was the hardest thing you'd done so far. Here's how it works.

NAIVE IDEA: sort, take the second from the end.
  -> works, but sorting is O(n log n), and duplicates break it ([5, 5, 3]).

BETTER IDEA: ONE pass, keep TWO running answers.
  let first = -Infinity;   // largest seen so far
  let second = -Infinity;  // second largest seen so far

  For each value:
    CASE A: value > first
       -> the old champion gets demoted:  second = first;  first = value;
       (ORDER MATTERS: if you set first first, you lose the old value.)
    CASE B: value < first but value > second
       -> it only beats second:  second = value;
       The check `value !== first` stops duplicates of the largest
       from becoming second.
    CASE C: otherwise -> ignore.

  After the loop: if second is still -Infinity, no second largest exists
  (e.g. [7] or [5, 5, 5]) -> return null.

WALKTHROUGH with [20, 20, 14, 11]:
  value  | first | second
  start  | -Inf  | -Inf
  20     | 20    | -Inf      (A)
  20     | 20    | -Inf      (not > first, and === first -> ignore)
  14     | 20    | 14        (B)
  11     | 20    | 14        (C)
  -> 14

NOTE ON YOUR TWO OLD VERSIONS:
  secondLargestNumber.js   -> clean, returns null when there's no answer. 👍
  revisionSecondLargest.js -> has special cases for length 1 and 2 that
     you don't need (the loop already handles them), and they disagree
     with the other version: [7] returns 7, and [5, 5] returns 5.
     Lesson: write the general loop first, then test edge cases against it
     before adding special cases.

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 5.1: return the second largest DISTINCT number, or null if none.
// Try writing it from the recap without looking at your old file.
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const [index, values] of arr.entries()) {
    if (values > largest) {
      secondLargest = largest;
      largest = values;
    } else if (values > secondLargest && values !== largest) {
      secondLargest = values;
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

// EXERCISE 5.2: same idea, mirrored: return the second SMALLEST distinct
// number, or null if none.
function secondSmallest(arr) {
  let smallest = Infinity;
  let secSmallest = Infinity;

  for(const values of arr){
    if(values < smallest){
      secSmallest = smallest;
      smallest = values;
    } else if(values < secSmallest && values !== smallest){
      secSmallest = values;
    }
  }
  return secSmallest === Infinity ? null : secSmallest;
}

// EXERCISE 5.3 (challenge): return the THIRD largest distinct number, or null.
// Hint: three variables. When value > first, everything shifts down one place.
function thirdLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for(const values of arr){
    if(values > largest){
      thirdLargest = secondLargest
      secondLargest = largest
      largest = values
    } else if (values > secondLargest && values !== largest){
      thirdLargest = secondLargest;
      secondLargest = values
    } else if (values > thirdLargest && values !== secondLargest && values !== largest){
      thirdLargest = values;
    }
  }
  return thirdLargest === -Infinity ? null : thirdLargest;
}

// ---------------------------- checks ----------------------------
section("5.1 secondLargest");
check(
  "[20, 20, 20, 14, 14, 11, 11]",
  secondLargest([20, 20, 20, 14, 14, 11, 11]),
  14,
);
check("[1, 6, 7, 10, 5]", secondLargest([1, 6, 7, 10, 5]), 7);
check("[5, 5, -4]", secondLargest([5, 5, -4]), -4);
check("[-3, -1, -2]", secondLargest([-3, -1, -2]), -2);
check("[3, 9] (length 2)", secondLargest([3, 9]), 3);
check("[5, 5] (all same)", secondLargest([5, 5]), null);
check("[7] (one element)", secondLargest([7]), null);
check("[] (empty)", secondLargest([]), null);

section("5.2 secondSmallest");
check("[4, 1, 3, 1, 2]", secondSmallest([4, 1, 3, 1, 2]), 2);
check("[2, 2]", secondSmallest([2, 2]), null);

section("5.3 thirdLargest");
check("[5, 1, 9, 9, 3, 7]", thirdLargest([5, 1, 9, 9, 3, 7]), 5);
check("[2, 1]", thirdLargest([2, 1]), null);
