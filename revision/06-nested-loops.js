/*
================================ RECAP ================================

A loop inside a loop: for EACH turn of the outer loop, the inner loop
runs ALL the way through.

  for (let i = 1; i <= 3; i++) {        // outer: ROWS
    let row = "";
    for (let j = 0; j < i; j++) {       // inner: COLUMNS (depends on i!)
      row += "* ";
    }
    console.log(row);
  }

  i=1 -> inner runs 1 time -> "* "
  i=2 -> inner runs 2 times -> "* * "
  i=3 -> inner runs 3 times -> "* * * "

HOW TO SOLVE ANY PATTERN:
  1. Outer loop = rows. How many rows?
  2. For row i, how many characters? Write it as a formula in i.
  3. Build the row as a string with the inner loop and print or store it.

TIME COMPLEXITY: if both loops go up to n -> n * n = O(n²).
  That's why nested loops get slow on big inputs.

========================================================================
*/
const { check, section } = require("./check");

// To make these testable, return an ARRAY of row strings instead of printing.
// No trailing spaces: use "*" not "* " for these.

// EXERCISE 6.1: right triangle of n rows.
// triangle(3) -> ["*", "**", "***"]
function triangle(n) {
  let pattern = [];
  for(let i= 1; i <= n; i++){
    let temp = "";
    for(let j=i; j > 0; j--){
      temp += "*";
    }
    pattern.push(temp);
  }
  return pattern;
}

// EXERCISE 6.2: upside-down triangle.
// invertedTriangle(3) -> ["***", "**", "*"]
function invertedTriangle(n) {
  let pattern = [];
  for(let i=n; i > 0; i--){
    let temp = '';
    for(let j=i; j>0; j--){
      temp += "*";
    }
    pattern.push(temp);
  }
  return pattern;
}

// EXERCISE 6.3: number triangle.
// numberTriangle(4) -> ["1", "12", "123", "1234"]
function numberTriangle(n) {
  let pattern = [];
  for(let i=1; i<=n; i++){
    let temp = "";
    for(let j=1; j<=i; j++){
      temp += `${j}`;
    }
    pattern.push(temp);
  }
  return pattern;
}

// EXERCISE 6.4: square of size n.
// square(2) -> ["**", "**"]
function square(n) {
  let pattern = [];
  for(let i=1; i<=n; i++){
    let temp = "";
    for(let j=1; j<=n; j++){
      temp +="*";
    }
    pattern.push(temp);
  }
  return pattern;
}

// EXERCISE 6.5 (DSA-flavoured): return true if any two DIFFERENT positions
// in arr hold the same value.
// Hint: outer loop i, inner loop j starting at i + 1, compare arr[i] and arr[j].
function hasDuplicate(arr) {
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] === arr[j]){
        return true;
      }
    }
  }
  return false;
}

// EXERCISE 6.6 (challenge): right-aligned triangle (spaces, then stars).
// rightTriangle(3) -> ["  *", " **", "***"]
function rightTriangle(n) {
  let pattern = [];
  for(let i=1; i<=n; i++){
    let temp = '';
    for(let j=n-i; j>0; j--){
      temp += ' ';
    }
    for(let k=1; k<=i; k++){
        temp += '*'
      }
    pattern.push(temp);
  }
  return pattern;
}


// ---------------------------- checks ----------------------------
section("6.1 triangle");
check("triangle(3)", triangle(3), ["*", "**", "***"]);

section("6.2 invertedTriangle");
check("invertedTriangle(3)", invertedTriangle(3), ["***", "**", "*"]);

section("6.3 numberTriangle");
check("numberTriangle(4)", numberTriangle(4), ["1", "12", "123", "1234"]);

section("6.4 square");
check("square(2)", square(2), ["**", "**"]);

section("6.5 hasDuplicate");
check("hasDuplicate([1, 2, 3, 2])", hasDuplicate([1, 2, 3, 2]), true);
check("hasDuplicate([1, 2, 3])", hasDuplicate([1, 2, 3]), false);

section("6.6 rightTriangle");
check("rightTriangle(3)", rightTriangle(3), ["  *", " **", "***"]);

// Bonus: once 6.1 passes, uncomment to see it printed.
// triangle(5).forEach((row) => console.log(row));
