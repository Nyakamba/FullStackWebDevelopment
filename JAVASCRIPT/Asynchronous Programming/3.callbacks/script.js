//Beahaving as a normal  function parameter/argument/variable

//create callback function

// function myCallbackFn() {
//   console.log("This is a callback function");
// }

//usage

// function logMessage(callback) {
//   //execute the callback fn
//   callback();
// }

//call HOF
// logMessage(myCallbackFn);

// logMessage(function () {
//   console.log("This is a callback function");
// });

//* Returning a callback function method 1

// function logMessage(callback) {
//   //execute the callback fn
//   const result = callback();
//   console.log(callback());
// }

// logMessage(() => {
//   return "This is a callback function";
// });

//Extracting Callback function

function logMessage(callback) {
  //execute the callback fn
  const result = callback();
  return result;
}

const result = logMessage(() => {
  return "This is a callback function";
});

//console.log(result);

//passing parameters to the callback function

// const logMeassageHOF = (callback) => {
//   const result = callback("Agnes", "Appiah");
//   console.log(result);
// };

// const loMessageCallFn = (firstName, lastName) => {
//   return `Hello ${firstName} ${lastName} this is a simple cb`;
// };

//logMeassageHOF(loMessageCallFn);

//HOF with parameter and call back function

const calculateSumHOF = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

calculateSumHOF(2, 3, (result) => {
  console.log(result);
});
