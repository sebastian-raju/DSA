// function moveZeroesRight (arr){
//     let lastPosition = arr.length - 1;
//     for(const [i, value] of arr.entries()){
//         console.log(arr[i], arr[lastPosition]);
//         if(i >= lastPosition){
//             break;
//         }
//         if(arr[i] === 0){
//             arr[i] = arr[lastPosition];
//             arr[lastPosition] = 0;
//             lastPosition--;
//         }
//     }
//     return arr;
// }

// const result = moveZeroesRight([0, 1, 0, 3, 12]);
// console.log(result);


// another method

function moveZeroes (arr){
    let pointer = 0;
    let forward = 0;
    for(const [i, value] of arr.entries()){
        if(arr[i] === 0){
            forward++
        } else if (arr[i] !== 0){
            let temp = arr[pointer];
            arr[pointer] = arr[i];
            arr[i] = temp;
            pointer++;
        }
    }
    return arr;
}

const result = moveZeroes([0, 1, 0, 3, 12, 5])
console.log(result);
