/*
* Calculating with Functions
* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
*
* This time we want to write calculations using functions and get the results. Let's have a look at some examples:
* seven(times(five())); // must return 35
* four(plus(nine())); // must return 13
* eight(minus(three())); // must return 5
* six(dividedBy(two())); // must return 3
*/

const zero = (callback?) => callback ? callback(0) : 0;
const one = (callback?) => callback ? callback(1) : 1;
const two = (callback?) => callback ? callback(2) : 2;
const three = (callback?) => callback ? callback(3) : 3;
const four = (callback?) => callback ? callback(4) : 4;
const five = (callback?) => callback ? callback(5) : 5;
const six = (callback?) => callback ? callback(6) : 6;
const seven = (callback?) => callback ? callback(7) : 7;
const eight = (callback?) => callback ? callback(8) : 8;
const nine = (callback?) => callback ?  callback(9) : 9;

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => Math.floor(a / b);