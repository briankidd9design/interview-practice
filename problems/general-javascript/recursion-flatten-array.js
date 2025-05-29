function flattenOutArray(inputArray) {
  let outputArray = [];
  executeRecursion(0, inputArray, outputArray);
  return outputArray;
}
function executeRecursion(index, inputArray, outputArray) {
  // base case
  if (index >= inputArray.length) return;
  // research why you need >= rather than ===
  let item = inputArray[index];
  if (Array.isArray(item)) {
    executeRecursion(index, item, outputArray);
  } else {
    outputArray.push(item);
  }
  executeRecursion(index + 1, inputArray, outputArray);
}
let numsArray = flattenOutArray([[5, 4], 0, 8, 9, [6, 2], 1, 8]);
console.log(numsArray);
