// QuickSort
// completed 02.19.24
let numsArray = [-1, 18, 32, 16, 5, 6, 2];
function quickSort(array, start, end) {
  //base case
  // recursion stops when this conditional case is met
  if (start >= end) return;
  // border can be thought of as the end of the left partition
  let boundary = partition(array, start, end);
  // left partition
  quickSort(array, start, boundary - 1);
  // right partition
  quickSort(array, boundary + 1, end);
}

function partition(array, start, end) {
  let pivot = array[end];
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      boundary++;
      [array[i], array[boundary]] = [array[boundary], array[i]];
    }
  }
  return boundary;
}
quickSort(numsArray, 0, numsArray.length - 1);
console.log(numsArray);
