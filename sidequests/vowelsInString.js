function vowelsInString(str) {
  let count = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];
  let lowerCaseStr = str.toLowerCase();

  for (const i of lowerCaseStr) {
    for (const j of vowelArr) {
      if (i === j) {
        count++;
        break;
      }
    }
  }
  return count;
}

const result = vowelsInString("Hello");
console.log(result);
