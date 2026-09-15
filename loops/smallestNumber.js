// write a funcion that returns the smallest number in an array

function smallestNumber (arr) {
    let smallest = arr[0];
    for(let i=0; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i]
        }
    }
    return smallest;
}


const arr = [1, 6, 7, 10, 5, 2, -8];

const result = smallestNumber(arr);

console.log(result);