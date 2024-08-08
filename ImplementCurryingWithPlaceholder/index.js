const _ = Symbol('placeholder');

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length && !args.includes(_)) {
      return fn(...args);
    } else {
      return (...nextArgs) => {
        const mergedArgs = args.map(arg => arg === _ && nextArgs.length ? nextArgs.shift() : arg).concat(nextArgs);
        return curried(...mergedArgs);
      };
    }
  };
}

// Example function (a + b) * c
function exampleFunction(a, b, c) {
  return (a + b) * c;
}

// Curried version of the example function
const curriedFunction = curry(exampleFunction);

// Using the curried function with placeholders
const result = curriedFunction(_, 2, _)(3)(4); // (3 + 2) * 4 = 20
console.log(result); // Output: 20
