//Accessing parent elements

const parentEL = document.getElementById("parent");

//Accessing the grandparent

const grandParentEl = parentEL.parentNode;
//console.log(grandParentEl);

//Accessing child elements

const firstChildEl = parentEL.firstChild;
const lastChildEl = parentEL.lastChild;

console.log(lastChildEl);
console.log(firstChildEl);

// Accessing Element Children Only

const firstElementChildEl = parentEL.firstElementChild;
const lastElementChildEl = parentEL.lastElementChild;
console.log(lastElementChildEl);
console.log(firstElementChildEl);
