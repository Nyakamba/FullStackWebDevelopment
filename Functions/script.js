// *--------
// *Function Declaration
// *--------

// function sayHello() {
//   // Logic goes here
//   console.log("Hello world");
// }
// sayHello();

// show date

function showDate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}

// showDate();

// *--------
// *Function Expression
// *--------

// function sayHello() {
//   // Logic goes here
//   console.log("Hello world");
// }
const sayHello = function () {
  console.log("Hello World");
};
// sayHello();

// Determine if a number is even or odd

const checkEvenOrOdd = function () {
  const number = 4;
  if (number % 2 === 0) {
    console.log("This is an even number");
  } else console.log("This is an od number");
};
// checkEvenOrOdd();

// *--------
// * Anonymous Function
// *--------

// function(){
//   console.log(object)
// }

// *--------
// * Immediately Invoked Function Expression Function (IIFE)
// * ------

// (function () {
//   console.log("welcome");
// })();

//  Calculating Square of a Number

(function () {
  const number = 5;
  const square = number * number;

  // console.log(square);
})();

// Concatinating strings

(function () {
  const str1 = "Hello";
  const str2 = "World";
  const result = `${str1}  ${str2}`;

  // console.log(result);
})();

// *--------
// *  Function paramaters vs arguments
// * ------

const greetings = function (name, age) {
  console.log(`Welcome ${name} , your age is ${age}`);
};
// greetings("Enock", 24);

// function adding two numbers

const addTwoNumbers = function (a, b) {
  const result = a + b;
  console.log(result);
};

// addTwoNumbers(2, 1000);

// *--------
// *  Function default parameters
// * ------

const greet = function (name = "Guest", age = 17) {
  console.log(`Hello my name is ${name}, and I am ${age} years old`);
};
// greet("Enock", 45);

// Default parameters with expressuions

const multiply = function (a, b = a * 2) {
  const result = a * b;
  console.log(`The result is ${result}`);
};
// multiply(2, 3);

// *--------
// *  Return statement
// * ------

const add = function (a, b) {
  const result = a + b;
  console.log("Before return");
  return result;
  console.log("After return");
};
const addResult = add(2, 4);

// console.log(addResult);

// Return statements with conditionals
function isEven(num) {
  if (num % 2 === 0) {
    return "Is even";
  } else {
    return "Not even";
  }
}

console.log(isEven(4));
