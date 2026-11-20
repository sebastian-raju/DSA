/*
================================ RECAP ================================

1. if / else if / else
   if (age >= 18) {
     return "adult";
   } else if (age >= 13) {
     return "teen";
   } else {
     return "child";
   }
   JS checks top to bottom and runs the FIRST branch that's true.

2. COMPARISONS
   ===  equal (always use 3 equals, not ==)
   !==  not equal
   <  >  <=  >=
   &&   AND (both must be true)
   ||   OR  (at least one true)

3. MODULO  %  gives the REMAINDER after division
   10 % 2 === 0  -> even
   7  % 2 === 1  -> odd
   -2 % 2 === 0  -> even (negative even numbers work)
   -7 % 2 === -1 -> careful! So check `n % 2 === 0` for even,
                    NOT `n % 2 === 1` for odd.

4. EARLY RETURN (pattern from eligibleToVote.js)
   Once you've returned, the rest of the function is skipped,
   so you often don't need an `else`:
     if (age >= 18) return "Yes";
     return "No";

========================================================================
*/
const { check, section } = require("./check");

// EXERCISE 2.1: return true if n is even, false otherwise.
function isEven(n) {
  // your code here
  if(n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// EXERCISE 2.2: return "even" or "odd" (use isEven if you want!)
function evenOrOdd(n) {
  // your code here
  if(n % 2 === 0){
    return "even";
  }else{
    return "odd";
  }
}

// EXERCISE 2.3: return true if age is 18 or more.
function canVote(age) {
  // your code here
  if(age >= 18){
    return true;
  } else {
    return false;
  }
}

// EXERCISE 2.4: return "positive", "negative", or "zero".
function sign(n) {
  // your code here
  if(n === 0){
    return "zero";
  } else if (n < 0){
    return "negative";
  } else if ( n > 0){
    return "positive";
  }
}

// EXERCISE 2.5: return the larger of two numbers (no Math.max!).
function maxOfTwo(a, b) {
  // your code here
  if(a === b){
    return "both are equal";
  }
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// EXERCISE 2.6: return true if n is divisible by BOTH 3 and 5.
function divisibleBy3And5(n) {
  // your code here
  if(n % 3 === 0 && n % 5 === 0){
    return true;
  } else {
    return false;
  }
}

// ---------------------------- checks ----------------------------
section("2.1 isEven");
check("isEven(10)", isEven(10), true);
check("isEven(0)", isEven(0), true);
check("isEven(-2)", isEven(-2), true);
check("isEven(7)", isEven(7), false);
check("isEven(-7)", isEven(-7), false);

section("2.2 evenOrOdd");
check("evenOrOdd(4)", evenOrOdd(4), "even");
check("evenOrOdd(-7)", evenOrOdd(-7), "odd");

section("2.3 canVote");
check("canVote(18)", canVote(18), true);
check("canVote(17)", canVote(17), false);

section("2.4 sign");
check("sign(5)", sign(5), "positive");
check("sign(-5)", sign(-5), "negative");
check("sign(0)", sign(0), "zero");

section("2.5 maxOfTwo");
check("maxOfTwo(3, 9)", maxOfTwo(3, 9), 9);
check("maxOfTwo(-1, -4)", maxOfTwo(-1, -4), -1);

section("2.6 divisibleBy3And5");
check("divisibleBy3And5(15)", divisibleBy3And5(15), true);
check("divisibleBy3And5(9)", divisibleBy3And5(9), false);
