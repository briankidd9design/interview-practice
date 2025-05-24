// binary search
// completed 02.19.24
let numsArray = [0, 2, 5, 8, 13, 18];

function binarySearch(array, val) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower <= upper) {
    let middle = Math.floor((lower + upper) / 2);

    if (val === array[middle]) {
      return `The value that you are searching for is located in index ${middle} of the array`;
    }
    if (val < array[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return `The value ${val} is not located in this array`;
}
let binSrch = binarySearch(numsArray, 2);
console.log(binSrch);
