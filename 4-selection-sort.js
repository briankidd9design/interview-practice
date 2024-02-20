// selection sort
// completed 09.19.24
let numsArray = [5, 2, 13, 18, 0, 8];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minValue]) {
        minValue = j;
      }
    }
    [array[i], array[minValue]] = [array[minValue], array[i]];
  }
  return array;
}

let selSort = selectionSort(numsArray);
console.log(selSort);
