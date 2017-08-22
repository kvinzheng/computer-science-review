function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

function memoization(fn) {
  let store = {};

  return function(n) {
    if (store[n]) {
      console.log('what is store', store)
      return store[n];
    } else {
      let result = fn(n);
      store[n] = result;

      return store[n];
    }
  }

}
let memoizedFib = memoization(fib);
// console.log(memoizedFib(3));
// console.log(memoizedFib(3));

let memoizationFib = (function (){
  let store = {};
  return function fib(n) {

    if (store[n]) {
      console.log('did i reuse value', store);
      return store[n];
    } else {
      if (n <= 1) {
        store[n] = 1;
      } else {
        store[n] = fib(n - 1) + fib(n - 2);
      }
    }
    return store[n];
  }
})();

console.log('hi there', memoizationFib(2))
console.log('higthere', memoizationFib(2))
