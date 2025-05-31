function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function logMessage() {
  console.log("Function called at", new Date().toLocaleTimeString());
}

// Call at most once every 1000ms (1 second)
const throttledLog = throttle(logMessage, 1000);

// Simulate repeated calls
setInterval(() => {
  throttledLog();
}, 200); // Tries to call every 200ms, but throttle will only allow every 1000ms
