const arr = [3, 5, 6, 7, 2, 4, 10];

const length = arr.length;


console.log(length);


for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] + " is even");
    }
    else{
        console.log(arr[i] + " is odd");
    }
}