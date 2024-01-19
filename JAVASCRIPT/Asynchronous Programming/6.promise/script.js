//* First function returning a promise

function stepOnePromise() {
  return new Promise((reolve, reject) => {
    reolve("Step 1 completed");
  });
}

function stepOTwoPromise() {
  return new Promise((reolve, reject) => {
    reolve("Step 2 completed");
  });
}

function stepThreeromise() {
  return new Promise((reolve, reject) => {
    reolve("Step 3 completed");
  });
}

//chaining
stepOnePromise()
  .then((resultFromP1) => {
    console.log(resultFromP1);
    //second promise
    return stepOTwoPromise();
  })
  .then((resultFromP2) => {
    console.log(resultFromP2);
    //thrid promise
    return stepThreeromise();
  })
  .then((resultFromP3) => {
    console.log(resultFromP3);
  })
  .catch((err) => {
    console.log(err);
  });
