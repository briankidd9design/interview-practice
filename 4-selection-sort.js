// selection sort
// completed 09.19.24
// Time Complexity: O(N^2)
// Auxiliary Space: O(1)
let numsArray = [5, 2, 13, 18, 0, 8];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // initially, min value is the first item of the array
    let minValueIndex = i;
    // find the minValueIndex of the unsorted part of the array
    // use j = i + 1 because this will ensure that the alorithm does not try to sort the part of the array that is already sorted
    for (let j = i + 1; j < array.length; j++) {
      // if the item at index j is smaller than the item at index minValueIndex then make the item at index j the new minValueIndex
      if (array[j] < array[minValueIndex]) {
        minValueIndex = j;
      }
    }
    // swap the old min value at index i with the new min value at index j
    // now the new minValue is in the correct place in the array, as the alogrithm will then look for the next minValue and place it after the current minValue
    [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
  }
  return array;
}

selectionSort(numsArray);
console.log(numsArray);
