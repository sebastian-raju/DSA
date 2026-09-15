// write a function that searches for an element in an array and returns the index. If the element is not present then just return -1


let element = 10;

let arr = [4, 2, 0, 10, 8, 30];




function searchElement(arr, elem) {
    // let flag = 0;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] === elem) {
            return i;
        }

    }

    // if (flag > 0) {
    //     return i
    // }
    // else {
    //     return -1;
    // }

    return -1
}

const result = searchElement(arr, element);

console.log(result);


