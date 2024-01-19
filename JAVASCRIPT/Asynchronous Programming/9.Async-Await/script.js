//Simulate a Delay

//creating
async function waitAndRun(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

//usage

const getProcessdvalue = async () => {
  const result = await waitAndRun(2);
  console.log(result);
};
//getProcessdvalue();

//* Fetching Multiple values in Parallel

const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Alice");
    }, 3000);
  });
};

const getAge = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};

async function getUserDetails() {
  const result = await Promise.all([getName(), getAge()]);
  console.log(result);
}

getUserDetails();
