/*
================================ RECAP ================================

1. FOR LOOP: 3 parts: start; keep-going-while; step
   for (let i = 0; i < 5; i++) { ... }   // i = 0, 1, 2, 3, 4  (5 times)

2. LOOPING OVER AN ARRAY
   const arr = [3, 5, 6];
   arr.length === 3, and indexes are 0, 1, 2
   -> the LAST index is always arr.length - 1

   for (let i = 0; i < arr.length; i++) { arr[i] ... }
   These two conditions are the same:
     i < arr.length
     i <= arr.length - 1      (what you wrote in whileLoop.js)
   But `i <= arr.length` is an OFF-BY-ONE bug: arr[arr.length] is undefined.

3. WHILE LOOP: same thing, you manage i yourself
   let i = 0;
   while (i < arr.length) {
     ...
     i++;          // forget this and it loops forever!
   }

4. FOR...OF: when you only need the VALUE, not the index
   for (const value of arr) { ... }
   (You used this in revisionSecondLargest.js.)
   Use the normal for loop when you need the index (e.g. search).

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 3.1: return an array of numbers from 1 to n.
// countUp(5) -> [1, 2, 3, 4, 5]
// Hint: start with `const result = [];` and use result.push(i)
function countUp(n) {
  const arr = [];
  // your code here
  for(let i=1; i <= n; i++){
    arr.push(i);
  }
  return arr;
}

// EXERCISE 3.2: same as 3.1, but use a WHILE loop.
function countUpWhile(n) {
  // your code here
  const arr = [];
  let i = 1;
  while (i <= n){
    arr.push(i);
    i++;
  }
  return arr;
}

// EXERCISE 3.3: return an array of labels like your ForLoopArrayPractice.js
// labelEvenOdd([3, 6]) -> ["3 is odd", "6 is even"]
function labelEvenOdd(arr) {
  // your code here
  for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      arr[i] = `${arr[i]} is even`
    } else {
      arr[i] = `${arr[i]} is odd`
    }
  }
  return arr;
}

// EXERCISE 3.4: return the sum of all numbers in an array. Use for...of.
function sumArray(arr) {
  // your code here
  let sum = 0;
  for( const i of arr){
     sum = sum + i;
  }
  return sum;
}

// EXERCISE 3.5: return the array reversed, WITHOUT using arr.reverse().
// Hint: loop from the last index (arr.length - 1) down to 0, using i--
function reverseArray(arr) {
  // your code here
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    revArr.push(arr[i]);
  }
  return revArr;
}

// EXERCISE 3.6 (think): how many times does each loop run?
//   a) for (let i = 0; i < 10; i++)
//   b) for (let i = 1; i <= 10; i++)
//   c) for (let i = 0; i < 10; i += 2)
const answers36 = [10, 10, 5];

// ---------------------------- checks ----------------------------
section("3.1 countUp");
check("countUp(5)", countUp(5), [1, 2, 3, 4, 5]);
check("countUp(0)", countUp(0), []);

section("3.2 countUpWhile");
check("countUpWhile(3)", countUpWhile(3), [1, 2, 3]);

section("3.3 labelEvenOdd");
check("labelEvenOdd([3, 6])", labelEvenOdd([3, 6]), ["3 is odd", "6 is even"]);

section("3.4 sumArray");
check("sumArray([3, 5, 6, 7, 2, 4, 10])", sumArray([3, 5, 6, 7, 2, 4, 10]), 37);
check("sumArray([])", sumArray([]), 0);

section("3.5 reverseArray");
check("reverseArray([1, 2, 3])", reverseArray([1, 2, 3]), [3, 2, 1]);

section("3.6 loop counts");
check("answers", answers36, [10, 10, 5]);
