function difference(array, values) {
  return array.filter((a) => !values.some((b) => Object.is(a, b)));
}

console.log(difference([1, 3, 2, 4], [1, 2, 3]));
