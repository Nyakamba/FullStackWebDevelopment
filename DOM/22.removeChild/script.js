// Function to add a new fruit

function addFruit(name) {
  const ulEl = document.getElementById("fruitList");

  //create li element
  const li = document.createElement("li");
  li.className = "fruit";
  li.textContent = name;
  ulEl.appendChild(li);
}
addFruit("Apple");
addFruit("Tomato");
addFruit("Banana");

//remove fruit function

function removeFruit(name) {
  //first: select the parent
  const ulEl = document.getElementById("fruitList");

  let fruitFound = false;

  //loop through the fruits to find the fruit

  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitFound = true;

      //remove fruit
      ulEl.removeChild(li);
      break;
    }
  }

  //update the message after removing the fruit
  document.getElementById("message").textContent = fruitFound
    ? `${name} was removed from the list`
    : `${name} not found in the list`;
}

removeFruit("Applde");
