// Selecting all elements with the class name "fiction"

const fictionBooksEl = document.getElementsByClassName("fiction");

//console.log(fictionBooksEl);

// Selecting all elements with the class name "non-fiction" within the nonfiction section

const noFictionEl = document.getElementById("nonFictionSection");

const nonFictionBooksInSectionEl =
  noFictionEl.getElementsByClassName("non-fiction");

//console.log(nonFictionBooksInSectionEl[0]);

// Loop through the HTMLcollection

// First convert into an array

const fictionBooksArr = Array.from(fictionBooksEl);

const fictionBooksElTitle = fictionBooksArr.map((el) => el.innerHTML);
console.log(fictionBooksElTitle);
