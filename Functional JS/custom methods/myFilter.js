//Custom Way
function filter(arr, predicateFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (predicateFn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4];
  const isEven = x => x % 2 === 0;
  const evenNumbers = filter(numbers, isEven);
  
  console.log(evenNumbers); // -> [2, 4]







