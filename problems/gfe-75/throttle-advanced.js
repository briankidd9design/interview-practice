function throttle_advanced(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  //   const timeoutFunc = () => {
  function timeoutFunc() {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  } // we are combiing the waiting arguments with the arguments
  return (...args) => {
    if (shouldWait) {
      // assigns all the waiting arguments to arguments
      waitingArgs = args;
      return;
    }
    // if shoulddWait is false then we spread in all the combined arguments to the callback function
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
const bonjour = () => {
  console.log("Function called at", new Date().toLocaleTimeString());
};

const throttledBonjour = throttle_advanced(bonjour, 1000);

// setTimeout(() => {
//   throttledBonjour();
// }, 500);
// setTimeout(() => {
//   throttledBonjour();
// }, 500);
// setTimeout(() => {
//   throttledBonjour();
// }, 500);

setInterval(() => {
  throttledBonjour();
}, 200);
