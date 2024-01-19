//Using setAttribute to change product images

const product1ImageEl = document
  .getElementById("product1")
  .querySelector("img");

//console.log(product1ImageEl);
product1ImageEl.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2023/08/19/19/59/mountains-8201132_640.jpg"
);

product1ImageEl.setAttribute("alt", "my new product");

//using  setAttribute to change product links

const product1LinkEl = document.getElementById("product1").querySelector("a");
console.log(product1LinkEl);
product1LinkEl.setAttribute("href", "new.html");
