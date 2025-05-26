const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");
const throttleTextAdvanced = document.getElementById("throttle-advanced");
// mousmove event tracker DOM elements
const defaultTextMousemove = document.getElementById("default-mousemove");
const debounceTextMousemove = document.getElementById("debounce-mousemove");
const throttleTextMousemove = document.getElementById("throttle-mousemove");
const throttleTextAdvancedMousemove = document.getElementById(
  "throttle-advanced-mousemove"
);
// If this input method was used to query a database, then dang, you would be making a query for every time the user types a character into the input box. This may use a ton of data but also slow down the connection and descrease the UX quality experience.
input.addEventListener("input", (e) => {
  //   defaultText.textContent = e.target.value;
  updateDefaultText(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
  updateThrottleTextAdvanced(e.target.value);
});

const updateDefaultText = (text) => {
  defaultText.textContent = text;
  // incrementCount(defaultTextMousemove);
};
// Enter Debounce and Throttle: They are there to slow down a function and only call them after a set delay. But let's make the distinction between debounce and throttling.
// Debounce is useful for when you have something like autocomplete in an input and you only want to make one request after a certain delay. This way you are not querying your db as frequently, which is less expensive for the network and your pocketbook.

// Debounce will wait a certain delay duration and only run after that delay. So if the user types a character and the delay is 2 seconds, the data will only be sent to the db or across a network if the user does not type another character within the 2 second delay. If the user does type a character within the 2-second delay, then the debounce timer is reset to 0 and the 2-second delay starts over.
const updateDebounceText = debounce((text) => {
  // takes in the text we want to update...takes debounce text and updates the debounce text field
  debounceText.textContent = text;
  incrementCount(debounceTextMousemove);
});
// debounce is passed a callback function and a delay
// we want to call this callback function after the delay as long as we haven't recalled the debounce in the past
// 1. Every time the input changes, the updateDebounceText function is called
// 2. The update function clears the original timeout
// 3. Then starts a new 1-second timer
// The debounce function waits until there is a 1-second delay before it runs
// What is the callback in this function? Is it text?
// With debounce, if you have many changes happening all at once, you can "batch" them up and send them all at once making the input less expensive for both querying the db and ergo using up user data, which can result in a slowed-down UX.
function debounce(cb, delay = 1000) {
  // our function is forced to wait one second before it actually runs
  // The timeout function is cleared out inside the returned function every time the user inputs data
  let timeout;
  // We want the function to take in any amount of arguments so we use the spread operator
  return (...args) => {
    // the clearTimeout is the secret sauce that allows the timer to clear and does not send any data unless the user waits more than the delay, in this case 1 second, before typing more data into the input box.
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// Trottle: Delays your function call by sending request intermittently base on your delay value. So if you have a delay value of 3 seconds, then the rquests is sent every 3 seconds. For example, this is useful in scrolling and resizing the browser.
// Scrolling and re-sizing make a lot of event calls so you can limit the amount of power the CPU uses by using a throttle function
const updateThrottleText = throttle_basic((text) => {
  throttleText.textContent = text;
  incrementCount(throttleTextMousemove);
});
const updateThrottleTextAdvanced = throttle_advanced((text) => {
  throttleTextAdvanced.textContent = text;
  incrementCount(throttleTextAdvancedMousemove);
});
// Throttle runs immediately when you call the function
// 1. The first time we call throttle it immediately calls the callback function
// 2. Then every other time that we call throttle it does nothing until the delay has finished
// 3. Once the delay has finished then shouldWait gets set to false, which means it no longer returns and then the call enters into the cb part of the function
//4. Then the cb function that is being returned is called and another second passes before the returned function with the setTimeout is called again

function throttle_basic(cb, delay = 1000) {
  // If we are within the delay waiting period the shouldWait variable will be true, which means do not call the function
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
//--this advanced throttle makes sure tho cache the last call and send it every time
function throttle_advanced(cb, delay = 1000) {
  let shouldWait = false;
  // waitingArgs is the argument for the function call when we are actually waiting
  // "We are saving the last call we made after we made the call with waitingArgs" KC
  let waitingArgs;
  const timeoutFunc = () => {
    // This conditional means nothing is waiting to happen
    // For example, in the context of this function with a one-second dealay,  one event happens and then another event does not happen for another 3 seconds
    if (waitingArgs === null) {
      shouldWait = false;
      // but what if we make two calls within the delay period? Then this part of the condition applies and makes sure both calls are sent
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

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultTextMousemove);
  updateDebounceText();
  updateThrottleText();
  updateThrottleTextAdvanced();
  // updateDebounceText(debounceTextMousemove);
});
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
