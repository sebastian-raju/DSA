// find second largest number
// my solution

function findSecondLargestNumber(arr) {
    if(arr.length < 2){
        return null
    }  

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    // let firstLargest = arr[0];
    // let secondLargest = arr[1];

    // First, make sure firstLargest >= secondLargest.
    // Do this ONCE before the loop; then the loop only processes new elements
    // and maintains this order instead of checking/swapping every iteration.
    // if (firstLargest < secondLargest) {
    //     let swap = firstLargest;
    //     firstLargest = secondLargest;
    //     secondLargest = swap;
    // }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];    
        }
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest !== -Infinity ? secondLargest : firstLargest;
}


let arr = [20, 20, 20, 14, 14, 11, 11];


const result = findSecondLargestNumber(arr);


console.log(result);