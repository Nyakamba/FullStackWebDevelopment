//*Example 1 with callback

//creating callback
// function simpleCallback1(success, cb) {
//   console.log("Cd function called");
//   if (success) {
//     cb(null, "The operation was successiful");
//   } else {
//     cb("the operation failed", null);
//   }
// }

// //usage callback function

// simpleCallback1(false, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
//   console.log("This always runs");
// });

//* Example 1 convert to use promise

//creation of promise

// const simplePromise = new Promise((resolve, rejected) => {
//   const success = false;
//   if (success) {
//     //resolve the promise
//     resolve("The promise operation was successiful");
//   } else {
//     //reject the operation
//     rejected("The promise operation rejected");
//   }
// });

// //usage

// simplePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Always runs");
//   });

//* Example 2 using callback promise

// function isEvenNumber(number, cb) {
//   if (number % 2 === 0) {
//     cb(null, `The number ${number} is even`);
//   } else {
//     cb(new Error(`The number ${number} is not even`));
//   }
// }

// //usage

// isEvenNumber(5, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

//* Example 2 convert to use promise

//creation of promise

function isEvenNumberPomise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      //resolve
      resolve(`The number ${number} is even`);
    } else {
      //reject
      reject(`The number ${number} is not even`);
    }
  });
}

//call the fn/rsolve

isEvenNumberPomise(9)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
