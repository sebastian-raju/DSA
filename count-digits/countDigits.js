function countDigits(n){
    let num = Math.abs(n);
    let count = 0;
    if(num === 0){
        return 1;
    }
    while(num>0){
        num = Math.trunc(num/10);
        count++;
    }
    return count;
}

// function countDigits(n) {
//   let num = Math.abs(n);

//   let count = 0;
//   if (num === 0) {
//     return 1;
//   }
//   for (; num > 0; count++) {
//     num = Math.trunc(num / 10);
//   }

//   return count;
// }

const result = countDigits(-100);
console.log(result);
