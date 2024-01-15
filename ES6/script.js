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

const getUser = () => ({ name: "Enock", age: 59 });

const getUserFn = getUser();

// *------
// * 'let  and 'const
// *------

//! Hoisting

//* Using var

// function hoistingIssue() {
//   console.log(a);
//   var a = 10;
//   //console.log(a);
// }
// hoistingIssue();

//* using let
function hoistingIssue() {
  console.log(a);
  let a = 10;
  //console.log(a);
}
// hoistingIssue();

//! Block scope

//* using var

// for (var i = 0; i < 3; i++) {
//   // console.log(i);
// }

// console.log(i);

// * using let
// for (let i = 0; i < 3; i++) {
//   // console.log(i);

// ! Immutability
// *Using var and let

// const x = 10;
// x = 20;
// console.log(x);

// *------
// * DESTRUCTURING in JS ES6
// *------

const numbers = [1, 2, 3, 4];

const [first, second, third, fourth] = numbers;
// console.log(first);
// console.log(numbers[1]);

// Swap variables
let a = 1;
let b = 2;

[a, b] = [b, a];
// console.log(a, b);

// Object destructuring

// Extract user data
// const { name, age, email } = {
//   name: "Enock",
//   age: 10,
//   email: "omwegaenock@gmail.com",
// };
// console.log(name);
// console.log(age);
// console.log(email);

// Destrcutring in function parameters

function greet1({ name, age }) {
  console.log(`Hello, ${name}, your age is ${age}`);
}

const myUser = {
  name: "Enock",
  age: 30,
};
// greet1(myUser);

// Nested Destructuring
const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "Enock",
    age: 20,
  },
};

console.log(name);
console.log(age);
console.log(id);
