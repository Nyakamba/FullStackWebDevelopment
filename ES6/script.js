// *------
// * ARROW FuNCTIOn
// *------

// function multiply=(a,b ){
//   return a+b
// }

const multiply = (a, b) => {
  a + b;
};
const result = multiply(2, 3);

//  Block Body Syntax

// const greet = (name) => {
//   return `Hello,${name}`;
// };
// const greetFn = greet("Enock");

const greet = (name) => `Hello, ${name}`;

const greetFn = greet("Enock");

// Single parameter

const square = (x) => x * x;
const squareFn = square(5);

// No Parameters
const random = () => Math.random();
// console.log(random());

// Object Literal Return

// const getUser = () => {
//   return {
//     name: "Enock",
//     age: 12,
//   };
// };

const getUser = () => ({ name: "Enock", age: 192 });

const getUserFn = getUser();
