//*------
//* Creating array using Array literal
//* ------

//syntax
// const studentAges = [22, 20, 20];

//Declaring an array of strings

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// console.log(daysOfTheWeek);

// Array of mixed types

const mixedTypes = [42, "Life", true];
// console.log(mixedTypes);

// Empty Array
const emptArr = [];
// console.log(emptArr);

//* -------
//* Array constructor function to create arrays
//* --------

// Array with empty data
const emptArray = new Array();
// console.log(emptArray);

// creating array with predefined size [5]

const sizeDefinedArr = new Array(5);
// console.log(sizeDefinedArr);

// Creating Array with elements

const fruitArr = new Array("Apple", "Banana", "Kiwi");
// console.log(fruitArr);

// Creating array using mixed data types

const mixedDataTypeArr = new Array(1, false, "Enock");
// console.log(mixedDataTypeArr);

// *------
// *Creating array using Array.of()
// *-------

//Creating  an array with numbers

const numberArray = Array.of(1, 2, 3);
// console.log(numberArray);

// Creating Array with strings

const strArr = Array.of("Apple", "Banana", "Kiwi");

// Creating Array with strings

const mixedArr = Array.of("Apple", "Banana", "Kiwi", false, true, 20);
// console.log(mixedArr);

// *------
// *Creating array using Array.from()
// *-------

//   cloning array

const origanalArr = [1, 2, 3];

const clonedArr = Array.from(origanalArr);
//  Creating an Array from an Array like object

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const covertedArr = Array.from(arrayLike);
// console.log(covertedArr);

// *------
// *Accessing array in an Array
// *-------

const studentAges = [22, 20, 20, 34, 12, 45];
// Accessing the first element

const firstAge = studentAges[studentAges.length - 1];
// console.log(firstAge);

// *------
// *Using push method
// *-------

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log("Original fruits:,", fruits);
// const newArrayOfFruits = fruits.push("Kiwi", "Orange");

// console.log("New fruits:", fruits);

//* Using unshift() to add elemnts at the beginning of an array

// const fruits = ["Apple", "Banana"];
// console.log("Original fruits:,", fruits);
// const newArrayOfFruits = fruits.unshift("Kiwi", "Orange");

// console.log("New fruits:", fruits);

//* Remove elemnts (.pop(), .shift())

const animal = ["Cat", "Dog", "Elephant"];

//*pop()
// console.log("Original Animal:", animal);
// const popedAnimal = animal.pop("Kiwi");

// console.log("Afer poppe ANimal", animal);

//*shift()
// console.log("Original Animal:", animal);
// const shiftedAnimal = animal.shift("Kiwi");

// console.log("Afer shifted ANimal", animal);

// *------
// *Array siz (.length)
// *-------
const colors = ["red", "Yellow", "Green", "Black"];
// const arrayLenth = colors.length;
// console.log(arrayLenth);
//Modify the length of the array
// colors.length = 2;
// console.log(colors);

// *------
// *Array Loops
// *-------

//! For loop
// Basic for loop to print numbers 0-5

for (let i = 0; i <= 5; i++) {
  //   console.log(i);
}

// Looping through an array to print its elements
const myFruits = ["Apple", "Banana", "Kiwi"];

for (let i = 0; i < myFruits.length; i++) {
  // console.log(myFruits[i]);
}

//Using break to exit the loop early

// for (let i = 0; i <= 10; i++) {
//   //code will run
//   if (i === 5) break;
//   console.log(i);
// }

//Using continue to skip tan iteration

// for (let i = 0; i <= 10; i++) {
//   //code will run
//   if (i === 5) continue;
//   console.log(i);
// }

// looping in reverse

for (let i = 10; i > 0; i--) {
  // console.log(i);
}

// ! forEach Loop
// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (element, index, array) {
//   console.log("Element:", element);
//   console.log("Index:", index);
//   console.log(array);
// });

// Using forEach to sum the elements of an array
// let sum = 0;
// numbers.forEach(function (element) {
//   sum += element;
// });
// console.log("Total sume is:", sum);

//Modifying array elements using forEach
// const squares = [];
// numbers.forEach(function (element) {
//   squares.push(element * element);
// });
// console.log(squares);

// ! Mapping .map()

// const newNumArrSquare = numbers.map(function (num, index, arr) {
//   return num * 100;
// });
// console.log(newNumArrSquare); //returns new array
// console.log(numbers); //does not mutate the original array

//Using map to convert an array of srtrings to uppercase
const words = ["apple", "pear", "mango"];
const convertedWords = words.map(function (word) {
  return word.toUpperCase();
});
// console.log(convertedWords);

//!Filtering .filter()
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(function (num) {
//   //filter logic
//   return num % 2 === 0;
// });
// console.log(evenNumbers);

const gender = ["male", "female"];
const maleArr = gender.filter(function (gender) {
  return gender === "male";
});

//Using filter to remove falsey values from an array
const mixedArr2 = [0, 1, "apple", "", null, "banana"];
const truthValues = mixedArr2.filter(function (value) {
  return Boolean(value);
});
// console.log(truthValues);
// console.log(mixedArr2);

//! Reducing (.reduce())

//Using reduce to sum up all elements in an array
const numbers = [1, 2, 3, 4, 5, 8, 6];

const sum = numbers.reduce(function (acc, current) {
  //perform the logic
  return acc + current;
}, 0);
// console.log(sum);

//Using reduce to find the maaximum value in an array
const maxNum = numbers.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, 0);
// console.log(maxNum);

//Using reduce to count the frequency of elements in an array
const fruits = ["Apple", "Banana", "Apple", "Mango", "Apple", "Mango"];
const fruitCount = fruits.reduce(function (acc, current) {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
// console.log(fruitCount);

// ! Multi-Dimentional Arrays
const matrix = [
  [1, 2, 3],
  [3, 4, 5],
  [7, 8, 9],
];

//Access the elements
// console.log(matrix[2][2]);

// Creating 3D Array
const threeDArray = [
  [
    [1, 3],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(threeDArray[1][1][1]);
