const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");
const throttleTextAdvanced = document.getElementById("throttle-advanced");
const defaultTextMouseMove = document.getElementById("default-mousemove");
const debounceTextMouseMove = document.getElementById("debounce-mousemove");
const throttleTextMouseMove = document.getElementById("throttle-mousemove");
const throttleTextAdvancedMouseMove = document.getElementById(
  "throttle-advanced-mouse-move"
);
// If this input method was used to query a database, then dang, you would be making a query for every time the user types a character into the input box
input.addEventListener("input", (e) => {
  //   defaultText.textContent = e.target.value;
  updateDefaultText(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
  updateThrottleTextAdvanced(e.target.value);
});

const updateDefaultText = (text) => {
  defaultText.textContent = text;
  //   incrementCount(defaultTextMouseMove);
};
// Enter Debounce and Throttle: They are there to slow down a function and only call them after a set delay. But let's make the distinction between debounce and throttling.
// Debounce is useful for when you have something like autocomplete in an input and you only want to make one request after a certain delay. This way you are not querying your db as frequently, which is less expensive for the network and your pocketbook.

// Debounce will wait a certain delay duration and only run after that delay. So if the user types a character and the delay is 2 seconds, the data will only be sent to the db or across a network if the user does not type another character within the 2 second delay. If the user does type a character within the 2-second delay, then the debounce timer is reset to 0 and the 2-second delay starts over.
const updateDebounceText = debounce((text) => {
  // takes in the text we want to update...takes debounce text and updates the debounce text field
  debounceText.textContent = text;
  incrementCount(debounceTextMouseMove);
});
// debounce is passed a callback function and a delay
// we want to call this callback function after the delay as long as we haven't recalled the debounce in the past
// 1. Every time the input changes, the updateDebounceText function is called
// 2. The update function clears the original timeout
// 3. Then starts a new 1-second timer
// The debounce function waits until there is a 1-second delay before it runs
function debounce(cb, delay = 1000) {
  // our function is forced to wait one second before it actually runs
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// Trottle: Delays your function call by sending request intermittently base on your delay value. So if you have a delay value of 3 seconds, then the rquests is sent every 3 seconds. For instance this is useful in scrolling and resizing the browser
const updateThrottleText = throttle_basic((text) => {
  throttleText.textContent = text;
//   incrementCount(throttleTextMouseMove);
});
const updateThrottleTextAdvanced = throttle_advanced((text) => {
  throttleTextAdvanced.textContent = text;
  //   incrementCount(throttleTextAdvancedMouseMove);
});
// Throttle runs immediately when you call the function
// 1. The first time we call throttle it immediately calls the callback function
// 2. Then every other time that we call throttle it does nothing until the delay has finished
// 3. Once the delay has finished the shouldWait gets set to false, which means it no longer returns
//4. Then the function that is being returned is called and another second passes before the returned function with the setTimeout is called again

function throttle_basic(cb, delay = 1000) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    // we immediately call the function as soon as we execute it
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
// This advanced function will save whatever the last call to the throttle function was and send it out after the one second.
// For this function we are saving the last call that we made after we made a call
// 1. We call throttle and it ran fine
//2. If you call it a second time during the waiting period it saves that call and will exectute the throttle as soon as the delay is over so that more than one call per second is not executed
function throttle_advanced(cb, delay = 1000) {
  let shouldWait = false;
  // waitingArgs is the argument for the function call when we are actually waiting
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waiting = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    // every time we are in the waiting stage we save whatever the last call to the function was so that we can call the function later with those arguments
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    // we immediately call the function as soon as we execute it
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

// const debouncedIncrementCount = debounce(incrementCount);
// const throttledIncrementCount = throttle_basic(incrementCount);
// const throttledIncrementCountAdvanced = throttle_advanced(incrementCount);
// const defaultIncrementCount = updateDefaultText(incrementCount);

// document.addEventListener("mousemove", (e) => {
//   //   defaultIncrementCount(defaultTextMouseMove);
//   updateDebounceText(debounceTextMouseMove);
//   updateThrottleText(throttleTextMouseMove);
//   updateThrottleTextAdvanced(throttleTextAdvancedMouseMove);
// });

// function incrementCount(element) {
//   element.textContent = (parseInt(element.innerText) || 0) + 1;
// }
