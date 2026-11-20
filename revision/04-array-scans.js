/*
================================ RECAP ================================

THE PATTERN: walk through the array once, keeping a "running answer".

  function largest(arr) {
    let largest = arr[0];                 // 1. START with something valid
    for (let i = 1; i < arr.length; i++) {// 2. visit every element
      if (arr[i] > largest) {             // 3. is this one better?
        largest = arr[i];                 // 4. update
      }
    }
    return largest;                       // 5. return AFTER the loop
  }

Choosing the starting value:
  - largest / smallest -> arr[0]  (a real element, so it's always valid)
                          or -Infinity / Infinity
  - count / sum        -> 0
  - search             -> no running value; return i as soon as you find it,
                          and return -1 AFTER the loop (not found).

COMMON MISTAKES (some are in your old files):
  - `for (i = 0; ...)` without `let` makes i a global variable.
    -> largestNumber.js, negativeNumberArray.js, searchAnElement.js
  - Putting `return -1` INSIDE the loop's else: it returns after checking
    only the first element.
  - Empty array: arr[0] is undefined. Decide what to return (null is common).

TIME COMPLEXITY: each of these visits every element once -> O(n).

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 4.1: return the largest number. Return null for an empty array.
// (stuck? loops/largestNumber.js)
function largest(arr) {
  if(arr.length === 0){
    return null;
  }
  if(arr.length === 1){
    return arr[0];
  }
  let largest = -Infinity;
  for(let i=0; i < arr.length; i++){    
    if(arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}

// EXERCISE 4.2: return the smallest number. Return null for an empty array.
// (stuck? loops/smallestNumber.js)
function smallest(arr) {
  if(arr.length === 0) return null
  if(arr.length === 1) return arr[0];
  let smallest = Infinity;
  for(let i=0; i < arr.length; i++) if(arr[i] < smallest) smallest = arr[i];
  return smallest;
}

// EXERCISE 4.3: return how many negative numbers are in the array.
// (stuck? loops/negativeNumberArray.js)
function countNegatives(arr) {
  let count = 0;
  for(let i=0; i < arr.length; i++) if(arr[i]<0) count++;
  return count;
}

// EXERCISE 4.4: return the INDEX of elem, or -1 if it's not there.
// (stuck? loops/searchAnElement.js)
function search(arr, elem) {
  for(let i=0; i < arr.length; i++) if(arr[i]=== elem) return i;
  return -1
}

// ---- NEW problems using the same pattern (not in your old code) ----

// EXERCISE 4.5: return how many times `target` appears in arr.
function countOccurrences(arr, target) {
  let count = 0;
  for(const i of arr) if(i === target) count++;
  return count;
}

// EXERCISE 4.6: return the INDEX of the largest number (first one if tied).
function indexOfLargest(arr) {
  if(arr.length === 0){
    return null;
  }
  if(arr.length === 1){
    return 0;
  }
  let largest = -Infinity;
  let indexOfLargest = null;
  for(const [index, value] of arr.entries()){
    if(arr[index] > largest){
      largest = arr[index]
      indexOfLargest = index;
    }
  }
  return indexOfLargest;
}

// EXERCISE 4.7: return true if the array is sorted in increasing order.
// Hint: compare arr[i] with arr[i - 1]. If any pair is out of order -> false.
function isSorted(arr) {
  // your code here
  for(const [index, value] of arr.entries()){
    if(value > arr[index+1]){
      return false
    }
  }
  return true;
}

// ---------------------------- checks ----------------------------
section("4.1 largest");
check("largest([1, 6, 7, 10, 5, 2, 8])", largest([1, 6, 7, 10, 5, 2, 8]), 10);
check("largest([-5, -2, -9])", largest([-5, -2, -9]), -2);
check("largest([])", largest([]), null);

section("4.2 smallest");
check("smallest([1, 6, 7, 10, 5, 2, -8])", smallest([1, 6, 7, 10, 5, 2, -8]), -8);
check("smallest([])", smallest([]), null);

section("4.3 countNegatives");
check("countNegatives([1, 2, -3, -5, 4])", countNegatives([1, 2, -3, -5, 4]), 2);
check("countNegatives([])", countNegatives([]), 0);

section("4.4 search");
check("search([4, 2, 0, 10, 8, 30], 10)", search([4, 2, 0, 10, 8, 30], 10), 3);
check("search([4, 2, 0], 4)", search([4, 2, 0], 4), 0);
check("search([4, 2, 0], 99)", search([4, 2, 0], 99), -1);

section("4.5 countOccurrences");
check("countOccurrences([1, 3, 1, 1, 2], 1)", countOccurrences([1, 3, 1, 1, 2], 1), 3);

section("4.6 indexOfLargest");
check("indexOfLargest([3, 9, 2, 9])", indexOfLargest([3, 9, 2, 9]), 1);

section("4.7 isSorted");
check("isSorted([1, 2, 2, 5])", isSorted([1, 2, 2, 5]), true);
check("isSorted([1, 5, 3])", isSorted([1, 5, 3]), false);
check("isSorted([])", isSorted([]), true);
