# Implement Currying

**Problem Statement** Implement a curry() function, which accepts a function as an input and returns a curried version of that function passed as input.

## Concept

In technical terms, currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with some number of arguments. That said, it is a technique which transforms a callable function from f(a, b, c) into sequences of callable functions like f(a)(b)(c) or f(a,b)(c) or f(a)(b,c).

Currying doesn't call a function. It just transforms it.

In simpler terms, currying is when a function taking all arguments at one time instead of takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.