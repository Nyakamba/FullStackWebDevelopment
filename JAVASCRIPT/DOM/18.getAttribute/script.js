//Filter image by author

//get all the images

const imagesEl = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

//console.log(imagesEl);

//create an array to store images by Alice

let imagesByAlice = [];

//use the getAttribute to filter images by author
imagesEl.forEach((img) => {
  //console.log(img);
  const author = img.getAttribute("data-author");
  console.log(author);
  if (author === "Alice") {
    imagesByAlice.push(img);
  }
});
imagesByAlice.forEach((img) => console.log(img));
//console.log(imagesByAlice);

//Hide images that are not by Alice

imagesEl.forEach((img) => {
  if (!imagesByAlice.includes(img)) {
    img.style.display = "none";
  }
});
