const n = 5;

function formInvertedStars(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "* ";
    }
    console.log(row);
    result.push(row);
  }

  return result;
}

const result = formInvertedStars(n);
console.log(result);
