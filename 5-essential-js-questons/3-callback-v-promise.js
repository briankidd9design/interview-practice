// Callback is like saying, you go ahead and do the work and then call me when it is done
// With a callback, you "order the burger" but are not notified about the burger and do not receive your burger until it is finished. Then your burger order will be handed to you
// With a promise, after ordering your burger, you receive a receipt or ticket that has your burger order/ This is the promis that you are going to be getting the burger at a later time.
//3. CALL BACK AND PROMISE
function getNumber(cb) {
  setTimeout(() => {
    cb(10);
  }, 4000);
}
// we are going to receive the number 10 but after a 100 ms delay
// This is the callback for the getNumber function
getNumber((n) => {
  console.log("call callback");
  console.log(n);
});
// as soon as you invoke this function, you immediately receive a response
// This is the promise for the getNumber function
function getNumberPromise() {
  console.log("call promise");
  return new Promise((resolve, reject) => {
    getNumber(resolve);
  });
}

const promise = getNumberPromise();
promise.then((n) => console.log(n));
