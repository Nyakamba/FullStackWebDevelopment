// Step 1: Select a list item using data attribute

const selectedItemEl = document.querySelector('[data-item="fruit"]');

//Step 2: Navigate to the parent <ul> element
const parentListEl = selectedItemEl.parentNode;
//console.log(parentListEl);

// Step 3: Navigate to the grandparent

const grandparentParentEl = parentListEl.parentNode;
//console.log(grandparentParentEl);

//step 4: navigate to the great-grandparent
const greatGrandParentEl = grandparentParentEl.parentNode;
console.log(greatGrandParentEl);
