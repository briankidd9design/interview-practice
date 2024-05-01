// time complexity θ(Nlog(N)) in all 3 cases (worst, average, and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.
// Auxiliary Space: O(N), In merge sort all elements are copied into an auxiliary array. So N auxiliary space is required for merge sort.
// Although merge sort is fast, we have to allocate additional space for this algorigthm to run
let numsArray = [5, 2, 13, 0, -1, 18, 13, 20];
// MERGE SORT = recursively dived array in 2, sort, re-combine
// practice 02.19.24 // practice 03.02.24
// practice 02.20.24
// practice 03.01.24
// practice 05.01.24

// Divide part of the Divide and Conquer methodology of this algorithm
function mergeSort(array) {
  // base case, once this case is met, the recursion stops
  if (array.length < 2) return;
  // Sort each half of the array and merge the result
  // Merge the result
  // 1. DIVIDE THE ARRAY IN HALF
  let middle = array.length / 2;
  // let the left array be the middle length long
  let left = [middle];
  // Split each array recursively until the base case or base condition is met and there is only one element left in the arrays

  for (let i = 0; i < middle; i++) {
    // create the array that fills in the values from the left part of the array
    left[i] = array[i];
  }

  // let the length of the right array be the middle length - middle long because we do not need to count the middle value for the length
  let right = [array.length - middle];

  // create the array that fills in the values from the right part of the array
  for (let i = middle; i < array.length; i++) {
    // this will ensure the new array starts at index 0
    // for instance starting at index 3 - middle that equals 3 would equal 0.
    right[i - middle] = array[i];
  }

  // 2 SORT EACH HALF BY RECURSIVELY CALLING THIS FUNCTION
  // call sort on both the left and right arrays
  // each sub list or sub array will be sorted and then merged and finally both the sorted left and right arrays will be sorted and merged
  mergeSort(left);
  mergeSort(right);
  // 3. merge the result
  merge(left, right, array);
}

// Conquer part of the Divide and Conquer methodology of this algorithm
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
    if (left[i] <= right[j]) {
      // if the value in the left array is smaller than the value in the right array, then add that value to the result array (whose index is being tracked by k) and then increment both the value in the result array and the left array by 1
      // copy the item i of the left parition to the index result of k of the final, result merged/sorted array
      result[k++] = left[i++];
    } else {
      // if the value in the right array is smaller than the value in the left array, then add that value to the result array (whose index is being tracked by k) and then increment both the value in the result array and the right array by 1
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
