const url = "https://jsonplaceholder.typicode.com/posts";

//Create a new instance of HMLHttpRequest

const xhr = new XMLHttpRequest();

//Configure the request

xhr.open("GET", url, true);

//Attach an event listener to handle changes in the request

xhr.onreadystatechange = function () {
  //check if the request is complete(readyState) and successiful(status 200)

  if (xhr.readyState === 4 && xhr.status === 200) {
    //parse
    console.log(JSON.parse(xhr.responseText));
  }

  //handle errors
  if (xhr.readyState === 4 && xhr.status !== 200) {
  }
};

//send the request
xhr.send();
