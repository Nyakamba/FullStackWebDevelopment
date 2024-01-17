// Step 1: Select the outer div using its ID

const outerDiv = document.getElementById("outerDiv");
//console.log(outerDiv);

const firstChildEl = outerDiv.childNodes[0];
//console.log(firstChildEl);

//step 3: Navigate to the second child, which is the innerDiv

const innerDivEl = outerDiv.childNodes[1];
//console.log(innerDivEl);

//Step 4: select the first child of the innerDiv

const innerDivFirstChildEl = innerDivEl.childNodes[0];
console.log(innerDivFirstChildEl);

//STep 5 select the second child of the innerDiv
const innerDivSecondChildEl = innerDivEl.childNodes[1];
console.log(innerDivSecondChildEl);
