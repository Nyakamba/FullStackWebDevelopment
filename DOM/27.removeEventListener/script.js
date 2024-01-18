//Named function

function showAlert() {
  console.log("Hello");
}

//getting the button element

const alertButtonEl = document.getElementById("alertButton");

//Add addEventListener to the element

alertButtonEl.addEventListener("click", showAlert);

//Named function for removing alert

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}

//getting the remove button element

const removeButtonEl = document.getElementById("removeButton");

removeButtonEl.addEventListener("click", removeAlert);
