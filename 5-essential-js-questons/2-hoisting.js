//2. HOISTING

// invoking the function before it has been defined
foo();
fooFoo();
// JavaScript takes the function and hoist it to the top of the scope
// Therefore we can call foo before it is shown in ht e
function foo() {
  console.log("Hi There");
}
// const or let functions do not get hoisted
// only var or function declarations get hoisted
// only declarations get hoisted in JavaScript
// assignments do not get hoisted
// anything on the left-hand side of the equals sign gets hoisted
// anything on the right-hand side of the equal sign does not get hoisted
const fooFoo = function () {
  console.log("Bye There");
};
