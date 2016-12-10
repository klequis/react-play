# React-Play.Template

Author: klequis

** This is not a react project. It is straight JavaScript. **

This example shows you how to use arrow ('=>') functions which are commonly used in React coding.

## Arrow Functions vs. Traditional Functions
Like traditional functions, arrow functions take parameters, have a function body and return a value.
````JavaScript
function() { // body } // Traditional

() => { //body } // Arrow
````
In traditional functions, the parameters are in the '()' whic follow the word keyword 'function'.
In arrow functions, the parameters are in '()' on the left side of the '=>'.
So these two functions are the same
````JavaScript
var a = function() { // body };
var b = () => { // body }
````
However, there are differences.

1. Arrow functions cannot be used for all the cases traditional functions can be. Read MDN for more information on this.
2. With arrow functions  
    a. If there is only one parameter the '()' are optional
    b. If there are zero or more than one paremeters the '()' are required.
````JavaScript
var a = () => { // body }; // no parameters
var b = str => { // body }; // one parameter
var c = (str1, str2) => { // body }; // two or more paremeters
````
3. Also with arrow functions, if the function body is a single expression the '{}' are optional was well.
````JavaScript
var a = (5, 4) => x + y;
````
