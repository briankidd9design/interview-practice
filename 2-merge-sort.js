let numsArray = [5, 2, 13, 0, -1, 18, 13, 20];
// practice 02.19.24
// practice 02.20.24
function mergeSort(array) {
  // base case
  if (array.length < 2) return;
  // Sort each half of the array and merge the result
  // Merge the result
  // 1. DIVIDE THE ARRAY IN HALF
  // Split each array recursively until the base case or base condition is met an there is only one element left in the array
  // Although merge sort is fast, we have to allocate additional space for this algorigthm to run
  let middle = array.length / 2;
  // let the left array be the middle length long
  let left = [middle];
  // create the array that fills in the values from the left part of the array
  for (let i = 0; i < middle; i++) {
    left[i] = array[i];
  }
  // let the length of the right array be the middle length - middle long because we do not need to count the middle value for the length
  let right = [array.length - middle];
  // create the array that fills in the values from the right part of the array
  for (let i = middle; i < array.length; i++) {
    // this makes it so the index starts at 0 to fill the array
    right[i - middle] = array[i];
  }
  // 2 SORT EACH HALF BY RECURSIVELY CALLING THIS FUNCTION
  mergeSort(left);
  mergeSort(right);
  // 3. merge the result
  merge(left, right, array);
}

function merge(left, right, result) {
  // i to iterate over the left partition
  // j to iterate over the right partition
  // k to iteerate over the result array

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    // we iterate over the left and right paritions
    // in each iteration, we pick the smaller value and store it in the result array
    // if the value in the left array is smaller than the value in the right array, then add that value to the result array and then increment both the value in the result array and the left array by 1
    if (left[i] <= right[j]) {
      // the result is the final array
      result[k++] = left[i++];
      // if the value in the right array is smaller than the value in the right array, then add that value to the result array and then increment both the value in the result array and the right array by 1
    } else {
      result[k++] = right[j++];
    }
  }

  // if there are any remaining values in either array, we need another while loop
  while (i < left.length) {
    result[k++] = left[i++];
  }
  while (j < right.length) {
    result[k++] = right[j++];
  }
}

mergeSort(numsArray);
console.log(numsArray);
