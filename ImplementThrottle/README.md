### Implement Throttle

## Problem Statement

Given a function 'fn' and a time 't' in milliseconds. You need to return a throttled version of that function.

## Concept

Let's first understand what's throttling. Throttling is a technique that limits how often a function can be called in a given period of time.

Sounds similar to Debouncing right? But there's a big difference one needs to understand. Throttling is suitable for scenarios where you want to limit how often a function can be called, but you don't want to miss any calls.

It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, mousemove, fetching data, etc.

## Example

Let's say you have a function that fetches some data from an API every time the user scrolls the page, you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls. This way, we can avoid overloading the server with unnecessary requests.