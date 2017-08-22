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

exports.some = function some(array, fn){
  let arr = array;

  if(arr.length === 0){
    return false;
  } else if(fn(arr[0]) === false){
    return some(arr.slice(1), fn);
  } else if(fn(arr[0]) === true){
    return true;
  }
}

exports.none = function none(array, fn){
  let arr = array;

  if(arr.length === 0){
    return true;
  } else if(!fn(arr[0])){
    return none(arr.slice(1), fn);
  } else {
    return false;
  }
}

exports.map = function map(array, fn){
  let arr = array;

  if(arr.length === 0){
    return [];
  }

  return [fn(arr[0])].concat(map(arr.slice(1),fn));
};

exports.join = function join(array, string){
  let arr = array;
  let temp = '';

  if(arr.length === 0) {
    return '';
  } else if(arr.length === 1){
    return arr[0];
  } else if (arr.length !== 0) {
    temp = temp + arr[0] + string;
  }

  return temp.concat(join(arr.slice(1), string));
}

exports.split = function split(string, delimiter) {
  let temp = [];
  if (string.length === 0) {
    return [];
  } else if (string.indexOf(delimiter) === -1) {
    return [string];
  } else {
    temp.push(string.substring(0,string.indexOf(delimiter)));
    let newString = string.substring(string.indexOf(delimiter)+1);
    return temp.concat(split(newString, string));
  }
}

exports.reduce = function reduce(array, fn, initialValue){
  let sum = initialValue;
  if(array.length === 0){
    return sum;
  } else if (array.length === 1){
    return fn(array[0], initialValue);
  } else {
    let accumulatedValue = fn(array[0], initialValue);
    return reduce(array.slice(1), fn, accumulatedValue);
  }
}

exports.indexOf = function indexOf(array, value, position = 0){
  if(array[0] === undefined){
    return -1;
  } else if(array[0] === value){
    return position;
  } else {
    position += 1;
    return indexOf(array.slice(1),value,position);
  }
}
