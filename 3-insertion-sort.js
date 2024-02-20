// Insertion Sort
// Practice run 02.19.24

let newArray = [22, 10, 1, 0, 6];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

insertionSort(newArray);
console.log(newArray);
