"use strict";

/*
 * - Open index.html in a browser to see the output of this file
 * - See explanations at http://klequis.commonly
*/

write("<h1>Hello. I love black.</h1>");

/*
 * EXAMPLE 01
*/
var traditional01 = function() {
  return "traditional01";
};
var arrow01 = () => "arrow01";
write(traditional01());
write(arrow01());

/*
 * EXAMPLE 02
*/
var traditional02 = function(str) {
  return str;
};
var arrow02 = str => str;
write(traditional02("traditional02"));
write(arrow02("arrow02"));

/*
 * EXAMPLE 03
 * - With arrow functions, you need '()' if you have 2 or more arguments.
*/
var traditional03 = function(str1, str2) {
  return str1 + " " + str2;
};
var arrow03 = (str1, str2) => str1 + " " + str2;
write(traditional03("this is", "traditional3"));
write(arrow03("this is", "arrow03"));

/*
 * EXAMPLE 04
*/
var traditional04 = function(str) {
  var strOut;
  if (str.length > 4) {
    strOut = str + " is more than 4 characters";
  } else {
    strOut = str + " is less than 4 characters";
  }
  return strOut;
};
var arrow04 = str => {
  var strOut;
  if (str.length > 4) {
    strOut = str + " is more than 4 characters";
  } else {
    strOut = str + " is less than 4 characters";
  }
  return strOut;
};
write(traditional04("traditional04"));
write(arrow04("arrow04"));

????????????????????????????????
/???????????????????????????????????????/
6
/*
 * EXAMPLE 05
 * - If you have more than one statement in the function body you not
 *   only need the '{}' but you also need a return statement if you
 *   are returning a value.
*/
var traditional05 = function(str) {
  var newStr;
  if (str.length > 4) {
    newStr = str + " is more than 4 characters";
  } else {
    newStr = str + " is less than 4 characters";
  }
  return newStr;
};
var arrow05 = str => {
  var newStr;
  if (str.length > 4) {
    newStr = str + " is more than 4 characters";
  } else {
    newStr = str + " is less than 4 characters";
  }
  return newStr;
};
write(traditional05("1234"));
write(arrow05("12345", "arrow03"));

/*
 * Utility functions
*/
// This just adds "<br><br>" to the message for spacing.
function write(msg) {
  document.write(msg + "<br><br>");
}
