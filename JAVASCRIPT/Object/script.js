// *------
// * Creating objects Using objects Literals
// *------

//Define an object to represent a book in a bookstore

// const book = {
//   title: "harry Potter",
//   author: "J.K Rowling",
//   available: true,
//   price: 99,
// };
// console.log(book);

// *------
// * Accessing objects properties using dot notation
// *------

// const bookTitle = book.title;
// console.log(book.author);
// console.log(book.author)
// console.log(book.price)

// *------
// * Accessing objects properties using bracket notation
// *------

const book = {
  title: "harry Potter",
  author: "J.K Rowling",
  available: true,
  price: 99,
};

const bookTitle = book["title"];
// console.log(book["available"]);
// console.log(book["price"]);
// console.log(book["author"]);

// Properties with Special Characters

const person = {
  "first name": "Ben",
  "last name": "Joe",
};

// console.log(person["first name"]);
// console.log(person["last name"]);

// using Expressions

const task = {
  description: "Finish homework",
  isCompleted: false,
};

const query = "isCom" + "pleted";
// console.log(task[query]);

// *------
// * Adding  properties to objects
// *------

// Add user role

const userProfile = {
  username: "Enock",
  email: "omwegaenock@gmaail.com",
};

// add role property

// userProfile.role = "admin";
userProfile["role"] = "admin";

// console.log(userProfile);

// * Adding properties with special Characters

const book1 = {
  title: "harry Potter",
};

book1["publication year"] = 2014;

// console.log(book1);

// *Adding nested properties

const employee = {
  name: "Bob",
  department: "HR",
};

// add address

employee.address = {
  city: "Nairobi",
  state: "Kenya",
};
console.log(employee.address);
