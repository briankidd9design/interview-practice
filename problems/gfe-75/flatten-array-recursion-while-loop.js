// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

function flatten(arr) {
  // this is the array that all the values will be pushed to
  const res = [];
  // slice creates a new array from the array being passed as a parameter
  // which is represented by the parameter arr
  // const copy = arr.slice();
  const copy = [...arr];
  // we iterate over the copied array through its entire length
  // is copy.length great than 0
  // We are going to mutate copy until its length is 0
  // Then we will be out of our While loop
  while (copy.length) {
    // shift will remove an item from the start of the array. This item will be
    // examined later by if conditional Array.isArray(item)
    const item = copy.shift();
    // if the item is an array then add it to the beginning of the array
    // This array will get examined again by the conditional
    // The second time it is checked it is now in the nested array and
    // will push the values of that array shown as the spread operator ...item,
    // to the res array that is eventually returned once the entire
    // array is traversed by the while loop
    if (Array.isArray(item)) {
      // mneumonic shit and unshit
      // unshift adds an item to the start of the array
      // these values are "unarrayed" and spread as as primatives
      copy.unshift(...item);
    } else {
      // if the item is NOT an array then push it to the res array that will be returned
      res.push(item);
    }
  }
  // once the entire array is examined recursively then it is returned with
  // the result of a flattened array
  return res;
}

console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
