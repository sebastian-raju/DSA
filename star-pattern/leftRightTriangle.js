let n = 10

const formLeftRightTriangle = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
    result.push(row);
  }
  return result;
};

const result = formLeftRightTriangle(n);
console.log(result);
