const express = require("express");

const app = express();
const PORT = 8082;

//receiving incoming data from the client configurations
app.use(express.json());
const books = [
  { id: "1", title: "The great Gatsby", author: "F.Scott" },
  { id: "2", title: "The MOby Dic", author: "Herman" },
  { id: "3", title: "The MERN Stack", author: "Enock" },
];

//Home route

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to my first book api using express",
  });
});
//Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books fetched successinfully",
    data: books,
  });
});

//Fetch a book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  if (!bookFound) {
    return res.json({
      status: "filed",
      message: `Book with id ${id} not found`,
    });
  }
  res.json({
    status: "success",
    message: "Book fetched successinfully",
    data: bookFound,
  });
});
//Create a book
app.post("/books", (req, res) => {
  newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "Book created successinfully",
    data: books,
  });
});
//satrt server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
