const url = "https://jsonplaceholder.typicode.com/posts";

// * Suing promise based

const fetchData = () => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })

    .catch((err) => {
      console.log(err);
    });
};
fetchData();

//Using async await

const fetchData2 = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//fetchData2();
