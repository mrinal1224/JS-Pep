//Custom Reduce
function reduce(arr, reducerFn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = reducerFn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  const numbers = [1, 2, 3, 4];
  
  const sum = (a, b) => a + b;
  const total = reduce(numbers, sum, 0);
  
  console.log(total); // -> 10






