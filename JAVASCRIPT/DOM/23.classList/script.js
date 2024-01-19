// select the p element

const p = document.getElementById("textElement");

// p.classList.add("highlight", "bold", "italic");

// function to add class

function addClass() {
  p.classList.add("highlight", "bold", "italic");
}

// function to remove class

function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}

//toggle class
function toggleClass() {
  p.classList.toggle("italic");
}

//function checkContains

function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains Highlight"
      : "Does not contain Highlight"
  );
}

//function to replace clas with another

function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

//list item

function listItem() {
  alert("The first class is:" + p.classList.item(0));
}

//get the value

function getValue() {
  console.log(p.classList.value);
}
