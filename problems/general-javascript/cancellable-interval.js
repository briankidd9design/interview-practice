// function setCancellableInterval(callback, delay, ...args) {
//   let intervalId = setInterval(callback, delay, ...args);
//   function cancelInterval() {
//     clearInterval(intervalId);
//   }
//   return cancelInterval;
// }

// let i = 0;
// // t = 0:
// const cancel = setCancellableInterval(() => {
//   i++;
//   console.log(i);
// }, 10);
// // t = 10: i is 1
// // t = 20: i is 2
// cancel();
// function callback() {
//   console.log("callback");
// }

// setCancellableInterval(callback, 5000);
// cancel();
function setCancellableTimeout(callback, delay, ...args) {
  let timeoutId = setTimeout(callback, delay);

  function cancelCallback() {
    clearTimeout(timeoutId);
  }
  return cancelCallback;
}

function callback() {
  console.log("one");
}
setCancellableTimeout(callback, 5000);
