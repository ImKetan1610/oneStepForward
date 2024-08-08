Currying is a functional programming technique where a function is transformed into a sequence of functions, each with a single argument. When using placeholders in currying, you can partially apply some arguments and leave placeholders for the rest.

## Problem Statement
Suppose you have a function that takes three arguments: a, b, and c, and returns the result of the expression (a + b) * c. 
Implement a curried version of this function that allows you to provide the arguments one by one, in any order, using placeholders.