// Linear Search
// completed 02.19.24
let numsArray = [5, 2, 13, 18, 0, 8];
function linearSearch(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return `The value ${searchValue} that you are searching for is located at index ${i}`;
    }
  }
  return `The value ${searchValue} is not located in the array`;
}

let ls = linearSearch(numsArray, 12);
console.log(ls);
