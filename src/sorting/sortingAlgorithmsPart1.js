'use strict';

const swap = require('./sort-helpers').swap;

function bubbleSort(arr) {

  let isSorted = false;
  let lastUnsorted = arr.length;
  while (!isSorted) {
    isSorted = true;
    for (var i = 1; i < lastUnsorted; i++) {
        if (arr[i-1] > arr[i]) {
            isSorted = false;
            [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
        }
    }
    lastUnsorted--;
  }
  return arr;
}
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
  return array;
}

function insertionSort(arr) {

  for( let i = 1 ; i < arr.length; i++){
    let key = arr[i];
    let j = i - 1;

    while( j >= 0 &&  key < arr[j] ){
      [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      j--;
    }

  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
