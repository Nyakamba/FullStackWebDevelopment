const productCartEls = document.querySelectorAll(".product-card");
//console.log(productCartEls);

//Extract and log names of all products

const productNameEls = document.querySelectorAll(".product-name");

productNameEls.forEach((element) => {
  console.log(element.innerHTML);
});

//select and log  all prices of laptop category products
