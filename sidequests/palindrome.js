function checkPalindrome(str) {
  let checkString = str.toLowerCase();
  let checkStringArray = checkString.split("");
  let newStringArray = []
  for (let i = checkStringArray.length - 1; i >= 0; i--) {
    newStringArray.push(checkStringArray[i]);
  }
  let newString = newStringArray.join("");
  if(newString === checkString){
    return true
  } 
  return false;
}

const result = checkPalindrome("malayala");

console.log(result);
