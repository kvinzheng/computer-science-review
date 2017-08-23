exports.linearSearch = function (array,value){
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return i;
    }
  }
  return -1;
}

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length) {
  if(min > max){
    return -1;
  }

  let mid = Math.floor(min + (max-min)/2);
  if(array[mid] === value){
    return mid;
  }
  else if(array[mid] < value){
    min = mid + 1;
  }
  else {
    max = mid - 1;
  }

  return binarySearch(array, value, min, max );
}
