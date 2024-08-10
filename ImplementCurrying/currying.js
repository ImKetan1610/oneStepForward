/******** Example 1 *********/ 
function add(a, b, c) {
    return a + b + c;
}
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Usage:
const add5 = curriedAdd(5);  // returns a function that adds 5 to the next argument
// console.log(add5)         // return anonymous function
const add5And3 = add5(3);     // returns a function that adds 3 to the next argument
console.log(add5And3(10));    // outputs 18

/************* Use Case- Event Handler ***************/
function handleEvent(eventType) {
    return function(element, callback) {
        element.addEventListener(eventType, callback);
    };
}

// Predefine a click event handler:
const handleClick = handleEvent('click');

// Use handleClick with different elements and callbacks:
handleClick(buttonElement, () => console.log('Button clicked!'));
handleClick(linkElement, () => console.log('Link clicked!'));

