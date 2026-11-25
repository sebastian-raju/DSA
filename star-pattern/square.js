function formSquare(num) {
  let resultArr = [];
  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= num; j++) {
      result += "*";
    }
    console.log(result);
    resultArr.push(result);
  }
  return resultArr;
}

const result = formSquare(5);
console.log(result);
