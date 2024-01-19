async function randomOucome() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

const handLeOutcome = async () => {
  try {
    const result = await randomOucome();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

handLeOutcome();
