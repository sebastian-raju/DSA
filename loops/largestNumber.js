// write a function that returns the largest number in an array

let arr = [1, 6, 7, 10, 5, 2, 8];

function checkLargestNumber(arr) {
    let largest = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest;
}


const result = checkLargestNumber(arr);

console.log(result);
