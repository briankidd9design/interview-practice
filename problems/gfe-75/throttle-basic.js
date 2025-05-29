function throttle(func, wait) {
  let shouldWait = false;
// never do 
    // return (...args) => {
  // The keyword 'this' is different base on if it is a stand alone or a method
  return function throttledFunc(...args) {
    if (shouldWait) return;
    // func(...args);
    // apply does not need a spread operator it takes an array and args is an array
    func.apply(this, args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, wait);
  };
}
// What if foo needed its own context in an object
const foo = {
  name: "Brian",
  throttle,
};
// invoking as a method of an object
const throttledHello = foo.throttle(hello, 500);

function hello() {
  console.log("Hello");
  //   for (let i = 0; i < 4; i++) {
  //     throttledHello();
  //   }
}
// invoking as a stand-alone function
// const throttledHello = throttle(hello, 500);
// const throttledHello = hello;
// This executes immediately
throttledHello();
// the next two calls will be ignored
throttledHello();
throttledHello();
// Wait peeriod is less than 500 so it will be ignored
setTimeout(() => {
  console.log("300");
  throttledHello();
}, 300);
setTimeout(() => {
  console.log("350");
  throttledHello();
}, 350);
setTimeout(() => {
  console.log("600");
  throttledHello();
}, 600);
