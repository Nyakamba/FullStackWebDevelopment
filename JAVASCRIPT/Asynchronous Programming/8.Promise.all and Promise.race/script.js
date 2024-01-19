// //* Promise.all

// //create our promise

// const promise1 = Promise.resolve("promise1 resolved");

// const promise2 = Promise.resolve("promise2 resolved");

// Promise.all([promise1, promise2]).then((result) => {
//   console.log(result);
// }).catch;

//* Promise.race

//create our promise

const promise1 = Promise.resolve("promise1 resolved");

const promise2 = Promise.reject(new Error("promise2 rejected"));

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
