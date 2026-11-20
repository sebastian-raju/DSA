/*
================================ RECAP ================================

1. VARIABLES
   const x = 10;   -> can't be reassigned. Use this by default.
   let y = 5;      -> can be reassigned (y = 6). Use for counters, running answers.
   Never write a variable without let/const (e.g. `i = 0`): it silently
   creates a GLOBAL variable. (Your old largestNumber.js does this!)

2. FUNCTIONS
   function add(a, b) {     // a, b are PARAMETERS
     return a + b;          // return sends a value BACK to the caller
   }
   const result = add(2, 3); // 2, 3 are ARGUMENTS. result === 5

3. return vs console.log  (the most important thing in this file)
   - console.log only PRINTS to the screen. The caller gets nothing back
     (the function returns `undefined`).
   - return GIVES the value back, so you can store it, test it, reuse it.
   - `return` also STOPS the function immediately. Code after it doesn't run.
   In DSA, functions should almost always RETURN their answer.

   Compare your old files:
     evenOrOdd.js      -> uses console.log inside (can't reuse the result)
     eligibleToVote.js -> uses return (better!)

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 1.1: return the sum of two numbers.
function sum(a, b) {
  // your code here
  const sum = a + b;
  return sum
}

// EXERCISE 1.2: return the product of three numbers.
function multiplyThree(a, b, c) {
  // your code here
  const product = a * b * c;
  return product;
}

// EXERCISE 1.3: return a greeting string: greet("Seb") -> "Hello, Seb!"
// Hint: "Hello, " + name + "!"
function greet(name) {
  // your code here
  const greeting = "Hello, " + name + "!";
  return greeting
}

// EXERCISE 1.4 (think, don't code): what does this print, and why?
//   function logIt(n) { console.log(n * 2); }
//   const r = logIt(4);
//   console.log(r);
// Write your answer as a string below, e.g. "8 then ???"
const myAnswer14 = "8 then undefined because there is no return for the function logIT";

// ---------------------------- checks ----------------------------
section("1.1 sum");
check("sum(10, 15)", sum(10, 15), 25);
check("sum(-3, 3)", sum(-3, 3), 0);

section("1.2 multiplyThree");
check("multiplyThree(2, 3, 4)", multiplyThree(2, 3, 4), 24);

section("1.3 greet");
check('greet("Seb")', greet("Seb"), "Hello, Seb!");

section("1.4 return vs console.log");
check("your answer", myAnswer14.toLowerCase().includes("undefined"), true);
