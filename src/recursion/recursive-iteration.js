exports.max = function max(array){
  let arr = array;
  if (arr.length === 0){
    return undefined;
  } else if(arr.length ===1){
    return arr[0];
  }

  if(arr[0] > arr[1]){
    arr.splice(1,1)
  } else {
    arr.splice(0,1);
  }
  return max(arr);
};

exports.min = function min(array){
  let arr = array;
  if (arr.length === 0){
    return undefined;
  } else if(arr.length === 1){
    return arr[0];
  }

  if(arr[0] < arr[1]){
    arr.splice(1,1);
  } else {
    arr.splice(0,1);
  }
  return min(arr);
}

exports.filter = function filter(array,fn){
  let arr = array;
  let temp = [];

  if(arr.length === 0){
    return [];
  } else {
    if(fn(arr[0])){
      temp.push(arr[0]);
    }
  }

  return temp.concat(filter(array.slice(1), fn));
};

exports.reject = function reject(array,fn){
  let arr = array;
  let temp = [];

  if(arr.length === 0){
    return [];
  } else {
    if(!fn(arr[0])){
      temp.push(arr[0])
    }
  }

  return temp.concat(reject(array.slice(1), fn));
}

exports.every = function every(array, fn) {
  let arr = array;

  if(arr.length === 0){
    return true;
  } else if (fn(arr[0])){
    return every(arr.slice(1), fn);
  } else {
    return false;
  }
}
