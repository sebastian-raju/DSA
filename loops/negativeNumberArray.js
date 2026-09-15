// write a function that returns the number of negative numbers in an array

let array = [1, 2, -3, -5, 4]


function negativeNumbersCount(arr){
    let count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}


const result = negativeNumbersCount(array);


console.log(result);