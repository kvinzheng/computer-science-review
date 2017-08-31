'use strict';

const swap = require('./sort-helpers').swap;
const merge = require('./sort-helpers').merge;
const partition = require('./sort-helpers').partition;

function mergeSort(items) {
  // Terminal case: 0 or 1 item arrays don't need sorting
  if(items.length < 2){
    return items;
  }
  let midpoint = Math.floor(items.length/2);
  let left = items.slice(0, midpoint);
  let right = items.slice(midpoint);
  return merge(mergeSort(left), mergeSort(right));
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let p = partition(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
  return arr;
}

module.exports = {
  mergeSort,
  quickSort
};
