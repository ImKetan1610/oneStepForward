
# OneStepForward

## Table of Contents

| **Questions**                                               | **Links**                          |
|-------------------------------------------------------------|------------------------------------|
| What is debouncing?                                         | [Click Here](#what-is-debouncing)  |
| What is throttling?                                         | [Click Here](#what-is-throttling)  |
| What is the difference between debouncing and throttling?   | [Click Here](#what-is-the-difference-between-debouncing-and-throttling)  |
| What is currying?   | [Click Here](#what-is-currying)  |

## What is debouncing?
**Answer:** - Debounce is a technique used in programming to limit the rate at which a function is executed. When an action is triggered multiple times in quick succession, like a user typing in a search bar or resizing a window, debounce ensures that the function associated with the action is not called too frequently. Instead, the function is executed after a specified delay, and if the action is triggered again before the delay ends, the timer resets. This helps in improving performance and avoiding unnecessary function calls, especially in situations where the action is likely to occur repeatedly within a short period.

## What is Throttling?
**Answer:** - Throttling is a technique used to control the frequency at which a function is executed. Unlike debouncing, which delays the function call until the actions stop, throttling ensures that a function is called at regular intervals, regardless of how many times the triggering event occurs. For example, if you have a function that needs to run when a user scrolls a webpage, throttling will make sure the function is executed only once every specified time interval, even if the scroll event is happening continuously. This helps in managing performance by preventing a function from being called too often in response to rapid or repeated events.

## What is the difference between debouncing and throttling?
**Answer:** - Here's a comparison between throttling and debouncing:

| **Aspect**               | **Throttling**                                              | **Debouncing**                                              |
|--------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| **Function Execution**    | Ensures the function is executed at regular intervals.      | Ensures the function is executed after a specified delay, only if the event hasn't been triggered again. |
| **Use Case**              | Useful when you want to limit the frequency of function calls, like in a scrolling or resizing event. | Useful when you want to delay the execution until the event has stopped, like in a search bar input. |
| **Event Handling**        | The function is called at most once per specified interval. | The function is called only after the event has not been triggered for the specified delay period. |
| **Example Scenario**      | Limiting the rate of API calls as a user scrolls.           | Waiting until a user finishes typing in a search box before making an API call. |
| **Performance Impact**    | Reduces the frequency of function execution by spreading calls evenly over time. | Reduces the number of function calls by only executing the function once after the final event. |
| **Delay Behavior**        | Executes the function at the start and then at each interval. | Executes the function after the event stops, with a reset timer if the event occurs again. |

Both techniques are used to optimize performance by controlling how often a function is called in response to frequent events.

## What is currying?
**Answer:** - Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each with a single argument.

**Syntax example (JavaScript):**
```javascript
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
```
Here, `curry(a)(b)(c)` is how you would call the function after currying.