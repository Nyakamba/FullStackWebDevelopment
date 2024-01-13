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
console.log(firstAge);
