function arrReverse(arr) {
  let lastPosition = arr.length - 1;
  for (const [i] of arr.entries()) {
    if (i >= lastPosition) break;
    let temp = arr[i];
    arr[i] = arr[lastPosition];
    arr[lastPosition] = temp;
    lastPosition--;
  }
  return arr;
}

const result = arrReverse([3, 8, 1, 5]);
console.log(result);
