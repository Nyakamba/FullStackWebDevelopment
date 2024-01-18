//---Mouse event-----

function addEvent() {
  console.log("CLick event is called");
}
document.getElementById("clickButton").addEventListener("click", addEvent);

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", () => {
    console.log("DoubleCLick event is called");
  });

document.getElementById("hoverDiv").addEventListener("mouseover", () => {
  console.log("onMouseOverHandler event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseout", () => {
  console.log("onMouseOutHandler event is called");
});

//-- Keyboard Events ----

document.getElementById("keyInput").addEventListener("keydown", () => {
  console.log("onkeydownHandler event is called");
});

document.getElementById("keyInput").addEventListener("keyup", () => {
  console.log("onkeyupHandler event is called");
});

document.getElementById("keyInput").addEventListener("keypress", () => {
  console.log("onkeypressHandler event is called");
});

// -- Form Events --
document.getElementById("myForm").addEventListener("submit", () => {
  console.log("onsubmitHandler event is called");
});

document.getElementById("formInput").addEventListener("focus", () => {
  console.log("onfocusHandler event is called");
});

document.getElementById("formInput").addEventListener("blur", () => {
  console.log("onblurHandler event is called");
});
