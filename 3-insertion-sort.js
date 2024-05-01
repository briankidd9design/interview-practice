// Insertion Sort
// Practice run 02.19.24
// Time Complexity: O(N^2)
// Auxiliary Space: O(1)

let newArray = [22, 10, 1, 0, 6];

function insertionSort(array) {
  // we start from index 1 since when we read the first item we assume it is in the correct position since there are no other items that we can compare the first item to
  for (i = 1; i < array.length; i++) {
    let currentValue = array[i];
    // we store all the previous items in j and if they are greater than the current value, we need to shift them to the right
    let j = i - 1;
    // if j is greater than or equal to 0 and the item at array j is greater than the currentValue, then assign j to the current, essentially shifting the item in j to the right.
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    // then we move to compare the next item of the array by assigning array[j+1] to the current value.
    array[j + 1] = currentValue;
  }
  return array;
}

insertionSort(newArray);
console.log(newArray);
