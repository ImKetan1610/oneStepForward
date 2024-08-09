// throttle function
function throttle(fn, t) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= t) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// this function needs to be passed as an argument
function logMessage() {
  console.log("Function executed");
}

//  added delay of 2 sec
const throttledLogMessage = throttle(logMessage, 2000);

// This will only log 'Function executed' once every 2 seconds, no matter how many times it's called.
throttledLogMessage(); // this will executed at first and for next 2 sec the function will not run,no matter how many times it's called
throttledLogMessage(); // not executed

setTimeout(() => {
  console.log("3000");
  throttledLogMessage(); // will execute after 3 sec
}, 3000);
