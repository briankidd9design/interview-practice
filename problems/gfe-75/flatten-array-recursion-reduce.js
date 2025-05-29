function flatten(value) {
  // The accumulator is what values exists inside the array
  // the curr is keep track of what index of the array is
  // being examined
  return value.reduce(
    // The ternary operator checks to see if the currnet value is an array
    // if it is an array, then call the flatten function
    // recursively which will be passed as a parameter the nested array
    // as the process proceeds, the acculator combines the parts of the array
    // that were not nested arrays, with the nested arrays that have been
    // flattened
    // implicit return here because it is an arrow function with one line
    // line 13 is returning a new array, whatever is returned gets replaced as the accumulator
    // The acc starts as an empty array
    // concat can take both ref types and primatives
    // a concatenation of A and B A + B 
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
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
