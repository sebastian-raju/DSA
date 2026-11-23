// method 1

// function checkAnagram(first, second) {
//   let firstStrArr = first.toLowerCase().split("");
//   let secondStrArr = second.toLowerCase().split("");

//   if (firstStrArr.length !== secondStrArr.length) {
//     return false;
//   }

//   for (const i of firstStrArr) {
//     for (const [index, values] of secondStrArr.entries()) {
//       if (i === values) {
//         secondStrArr.splice(index, 1);
//         break;
//       }
//     }
//   }
//   if (secondStrArr.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


//method 2

// function checkAnagram (first, second){
//     const firstStr = first.toLowerCase().split("").sort().join("");
//     const secondStr = second.toLowerCase().split("").sort().join("");

//     return firstStr === secondStr ? true : false
// }


// method 3

function checkAnagram (first, second){
    const countObj = {};
    const firstStr = first.toLowerCase().split("");
    const secondStr = second.toLowerCase().split("")

    if(firstStr.length !== secondStr.length){
        return false
    }

    for(const value of firstStr){
        countObj[value] = (countObj[value] || 0) + 1;
    }
    for(const value of secondStr){
        countObj[value] -= 1;
    }

    for(const [key, value] of Object.entries(countObj)){
        if(countObj[key] !== 0){
            return false;
        }
    }
    return true;
}

const result = checkAnagram("aab", "baa");
console.log(result);
