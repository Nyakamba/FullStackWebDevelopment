const productCartEls = document.querySelectorAll(".product-card");
//console.log(productCartEls);

//Extract and log names of all products

const productNameEls = document.querySelectorAll(".product-name");

productNameEls.forEach((element) => {
  // console.log(element.innerHTML);
});

//select and log  all prices of laptop category products

const laptopPricesEls = document.querySelectorAll(
  "[data-category='laptop'] .product-price"
);

//console.log(laptopPricesEls);

laptopPricesEls.forEach((el) => {
  console.log(el.textContent);
});

//Select all products  with a rating above 4.5
const highestRatingsEl = document.querySelectorAll(
  '[data-rating="4.7"], [data-rating="4.8"]'
);

highestRatingsEl.forEach((el) => {
  console.log(el.innerHTML);
});
