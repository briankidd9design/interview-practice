function flattenOutArray(inputArray) {
  let outputArray = [];
  executeRecursion(0, inputArray, outputArray);
  return outputArray;
}
function executeRecursion(index, inputArray, outputArray) {
  // base case
  if (index >= inputArray.length) return;
  if (Array.isArray(inputArray[index])) {
    executeRecursion(index, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  executeRecursion(index + 1, inputArray, outputArray);
}
let numsArray = flattenOutArray([[5, 4], 0, 8, 9, [6, 2], 1, 8]);
console.log(numsArray);
