Array.prototype.square = function () {
  return this.map((x) => x ** 2);
};

console.log([1, 2, 3, 4].square());
