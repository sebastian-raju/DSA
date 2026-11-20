# Revision: everything up to Oct 2026

This covers everything in `warm-up/` and `loops/`. Go through the lessons in order.

Each lesson file has:
1. **Recap**: a short explanation in comments at the top. Read it.
2. **Exercises**: empty functions for you to fill in. **Don't look at your old code first.**
3. **Checks**: run the file and every exercise prints ✅ or ❌.

```bash
node revision/01-basics.js
```

When everything in a file shows ✅, move on to the next one. If you're stuck for more than 10 minutes, open the old file listed next to the exercise.

| # | Lesson | What it covers | Your old files |
|---|--------|----------------|----------------|
| 1 | `01-basics.js` | variables, functions, `return` vs `console.log` | helloWorld, sumOfTwoNumbers |
| 2 | `02-conditionals.js` | `if / else`, `%` (modulo), even/odd | evenOrOdd, eligibleToVote |
| 3 | `03-loops.js` | `for`, `while`, `for...of`, off-by-one errors | firstForLoop, whileLoop, ForLoopArrayPractice |
| 4 | `04-array-scans.js` | the "keep a running answer" pattern: largest, smallest, count, search | largestNumber, smallestNumber, negativeNumberArray, searchAnElement |
| 5 | `05-second-largest.js` | tracking **two** values in one pass, duplicates, edge cases | secondLargestNumber, revisionSecondLargest |
| 6 | `06-nested-loops.js` | loop inside a loop, star patterns | loopInLoop |
| 7 | `07-practice.js` | confidence round: mixed problems from lessons 1–6, easy → challenge | (none, all new) |

## The one idea to remember

Almost every problem so far follows this template:

```js
function solve(arr) {
  let answer = /* a starting value */;
  for (let i = 0; i < arr.length; i++) {
    if (/* arr[i] is "better" than answer */) {
      answer = /* update */;
    }
  }
  return answer;
}
```

What changes from problem to problem is **the starting value** and **the condition**.
