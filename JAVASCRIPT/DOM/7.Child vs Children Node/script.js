//Fetch the element with id='parent'

const parentEl = document.querySelector("#parent");
//console.log(parentEl.childNodes);
//parentEl.childNodes.forEach((node) => console.log(node.nodeType));

//Fetch all child element nodes of the parent element

console.log(parentEl.children);

const convertedHTMCollection = Array.from(parentEl.children);
convertedHTMCollection.forEach((node) => console.log(node.nodeType));
