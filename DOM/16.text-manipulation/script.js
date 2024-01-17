//* Using textContent to update the blog title

const blogTitle = document.getElementById("title");

//blogTitle.textContent = "New blog title";

//change the background color
// blogTitle.style.background = "red";

// blogTitle.style.color = "white";

//* Using innerHTML to add another paragraph with som HTML content

const paragraphEL = document.getElementById("paragraph");

// paragraphEL.innerHTML = "<h1>I ahve changed the paragraph</h1>";

paragraphEL.innerHTML +=
  "<br> <strong>This is a new paraggraph text with strong formatting</strong>";
