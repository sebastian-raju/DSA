function findDigits(n) {
    // Write your code here
    let num = Math.abs(n);
    let count = 0;
    let temp = num;
    if(num===0){
        return 0;
    }

    while(temp > 0){
        let rem = temp%10;
        if(rem !== 0 && num%rem === 0){
            count += 1;
        }
        temp = Math.trunc(temp/10);
    }
    
    return count;
}

const result = findDigits(120);
console.log(result);