### Implement Debounce

## Problem Statement

- Given a function fn and a time 't in milliseconds. You need to return a debounced version of that function.

## Concept

First, let's try to understand what debounce means. In technical terms, Debouncing is a programming technique that helps to improve the performance of web applications by limiting the frequency of function calls. (think of this as something like a rate limiter)

In general, Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

## Example

Imagine we have a search box that shows suggestions as the user types, If we call a function to fetch suggestions on every keystroke, we might end up making too many requests to the server, which ca slow down the application and waste resources. Instead, we can use debouncing to wait until the user has stopped typing for a while before making the request