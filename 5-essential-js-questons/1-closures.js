//1.CLOSURES
let x = 100;
function logx() {
  // we are not passing any parameters in the function
  console.log(x);
}

logx();

function makeAdder(x) {
  // this inner function can access variables in the outer function
  return function (y) {
    return x + y;
  };
}
// assigning add5 to the makeAdder function and passing to it 5
// so this will hold a value of 5
const add5 = makeAdder(5);
// then we pass a value of 10 to the add5 data in the stack
// we then add the two together to get 15
console.log(add5(10));
// 1. when we call makeAdder we pass in 5, so x is going to be 5;
// 2. Then at that point we receive a new function called add5
// 3. What ever number we pass into add5 is going to take that number and then add 5 to it
// 4. So in the example above, the result will be 15
