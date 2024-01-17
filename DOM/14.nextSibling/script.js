//Select the container

const containerEl = document.getElementById("container");

//Get all buttons within the container

const buttonEl = document.querySelectorAll("button");

//console.log(buttonEl);

// loope through each buttons and change the text of its next siblings

buttonEl.forEach((button) => {
  const nextElementEl = button.nextSibling;
  // check if the next sibling element is an element
  if (nextElementEl && nextElementEl.nodeType === 3) {
    nextElementEl.textContent = "changed text";
  }
  console.log(nextElementEl);
});
