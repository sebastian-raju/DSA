 
 
 function secondLargest (arr) {
  if(arr.length === 0){
    return null;
  }
  if(arr.length === 1){
    return arr[0];
  }
  if(arr.length > 2){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(const value of arr){
      if(value > firstLargest){
        secondLargest = firstLargest;
        firstLargest = value
      }
      else if(value > secondLargest && value !== firstLargest){
        secondLargest = value;
      }
    }
    return secondLargest === -Infinity ? firstLargest : secondLargest ;
  }
  else{
    if(arr[0] > arr[1]){
      return arr[1];
    }
    else{
      return arr[0];
    }
  }
    
 }


 const array = [5, 5, -4];

 const result = secondLargest(array);

 console.log(result);