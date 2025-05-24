// Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

function chunk(array, size = 1) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    console.log(i);
    result.push(array.slice(i, i + size));
  }
  return result;
}

let sizedArray = chunk([4, 2, 3, 5, 9, 5, 8], 2);
console.log(sizedArray);
