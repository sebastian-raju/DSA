/*
================================ RECAP ================================

PROBLEM (HackerRank "Mini-Max Sum"): given 5 numbers, find the smallest
and largest sum you can make using exactly 4 of them.

TRAP: arr.sort() with no comparator sorts as STRINGS.
  [1, 2, 3, 4, 10].sort()               -> [1, 10, 2, 3, 4]   😱
  [1, 2, 3, 4, 10].sort((a, b) => a - b) -> [1, 2, 3, 4, 10]
  Also: .sort() CHANGES the original array and returns that same array.

SORTED VERSION (works, O(n log n)):
  sort, then add up everything except the last (min) / the first (max).

FASTER VERSION (O(n), one pass):
  "Using 4 of 5" = "leave ONE out".
    smallest sum = total - (the largest number)
    largest sum  = total - (the smallest number)
  So ONE loop keeps THREE running answers: total, min, max.
  (Same idea as lesson 5: several trackers in one pass.)

Before coding, answer:
  1. Starting value of total? of min? of max?   (why NOT 0 for min?)
  2. What do I update on each value?
  3. What do I return after the loop?

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 8.1 (predict, don't run): what does this return?
//   [5, 40, 100, 3].sort()
// Write your answer as an array below.
const answer81 = null; // e.g. [?, ?, ?, ?]

// EXERCISE 8.2: return [minSum, maxSum] using exactly 4 of the 5 numbers.
// RULES: no sorting, ONE loop, don't change arr.
// miniMaxSum([1, 2, 3, 4, 5]) -> [10, 14]
// (HackerRank prints them; we return them so the checks can test it.)
function miniMaxSum(arr) {
  // your code here
}

// EXERCISE 8.3 (challenge): "leave one out" for EVERY position.
// Return an array where result[i] = sum of everything EXCEPT arr[i].
// sumWithoutEach([1, 2, 3, 4]) -> [9, 8, 7, 6]
// RULE: no nested loops. (Hint: how many loops do you actually need?)
function sumWithoutEach(arr) {
  // your code here
}

// ------------------------------ CHECKS ------------------------------

section("8.1 predict the sort");
check(
  "your answer",
  JSON.stringify(answer81) === JSON.stringify([5, 40, 100, 3].sort()),
  true,
);

section("8.2 miniMaxSum");
check("miniMaxSum([1, 2, 3, 4, 5])", miniMaxSum([1, 2, 3, 4, 5]), [10, 14]);
check("miniMaxSum([1, 2, 3, 4, 10]) (sort trap)", miniMaxSum([1, 2, 3, 4, 10]), [10, 19]);
check("miniMaxSum([5, 5, 5, 5, 5]) (duplicates)", miniMaxSum([5, 5, 5, 5, 5]), [20, 20]);
check("miniMaxSum([7, 69, 2, 221, 8974])", miniMaxSum([7, 69, 2, 221, 8974]), [299, 9271]);
const original = [9, 3, 7, 1, 5];
miniMaxSum(original);
check("doesn't change the input", original, [9, 3, 7, 1, 5]);

section("8.3 sumWithoutEach");
check("sumWithoutEach([1, 2, 3, 4])", sumWithoutEach([1, 2, 3, 4]), [9, 8, 7, 6]);
check("sumWithoutEach([10])", sumWithoutEach([10]), [0]);
check("sumWithoutEach([-1, 1])", sumWithoutEach([-1, 1]), [1, -1]);
check("sumWithoutEach([])", sumWithoutEach([]), []);
