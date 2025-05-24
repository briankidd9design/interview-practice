//bubble sort
// completed 02.19.24
let numsArray = [5, 2, 13, 13, 18, 0, 8];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  let elimDupes = [...new Set(array)];
  return elimDupes
}

let bubSrt = bubbleSort(numsArray);
console.log(bubSrt);
