'use strict';

const swap = require('./sort-helpers').swap;

function bubbleSort(arr) {

  let done = false;
  while (!done) {
    done = true;
    for(let i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]){
        done = false;
        swap(arr, i-1, i);
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

function insertionSort(arr) {
  for(let i = 0; i < arr.length ; i++) {
    let current = arr[i];
    let j;
    for(j = i-1; j >= 0 && arr[j] > current; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
