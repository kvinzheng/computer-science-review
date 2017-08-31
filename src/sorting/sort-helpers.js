'use strict';

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function merge(arr1, arr2) {
  let result = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] < arr2[0]){
      result.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else {
      result.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
  return result.concat(arr1).concat(arr2);
}

function partition(arr, left, right){
  let pivotValue = arr[left];
  let pivotIndex = left;
  for(let i = left + 1; i <= right; i++){
    if(arr[i] < pivotValue) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, left, pivotIndex);
  return pivotIndex;
}

module.exports = {
  swap,
  merge,
  partition
};
