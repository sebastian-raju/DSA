let n = 5;

function formSquarePattern(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    if (i === 0 || i === n - 1) {
      for (let j = 0; j < n; j++) {
        row += "* ";
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (j === 0 || j === n - 1) {
          row += "* ";
        } else {
          row += "  ";
        }
      }
    }
    console.log(row);
    result.push(row);
  }

  return result;
}

const result = formSquarePattern(n);
console.log(result);

// ------------------------------------------------------------
// Shorter version: one inner loop, one if.
// A cell is on the border if it is in the top row, the bottom row,
// the left column, or the right column, so all four checks go in one ||.
// ------------------------------------------------------------

// function formHollowSquare(n) {
//   const result = [];
//
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//         row += "* ";
//       } else {
//         row += "  ";
//       }
//     }
//     console.log(row);
//     result.push(row);
//   }
//
//   return result;
// }
//
// formHollowSquare(n);
