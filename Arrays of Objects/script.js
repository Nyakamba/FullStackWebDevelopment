// *-------
// * The concept Objects Being Passed by reference
// *-------

// Modifying Object  through a different Reference

const person1 = { name: "Alice", age: 20 };

const person2 = person1;
// modify age
person2.age = 30;

// person1.name = "John";
// console.log("Person2", person2);
// console.log("Person1", person1);

// Passing objects to a function

const incrementAge = (personObj) => {
  personObj.age += 1;
};

// person object
// const bob = { name: "Bob", age: 40 };

// console.log("Before", bob);

// incrementAge(bob);

// console.log("after", bob);

// *-------
// *Objects in Arrays(Array-object-hybrid)
// *-------

// Scenario: Manageging a list os Students

// We'll create a simple list of students where each student is an object with properties like 'id', 'name', and 'grade'.

const students = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 2, name: "Alice", grade: "B" },
];

// Accessin student
// const student1 = students[0].name;
// console.log(student1);
// console.log(students);

// Add new student

const addStudent = (id, name, grade) => {
  const newStudent = { id, name, grade };

  // push the new student into the students array

  students.push(newStudent);
};
addStudent(3, "James", "C");
// console.log(students);

// Upgrade student

// const updateStudentsGrade = (id, newGrade) => {
//   const studentFounnd = students.find((student) => {
//     return student.id === id;
//   });

//   if (studentFounnd) {
//     studentFounnd.grade = newGrade;
//   } else {
//     console.log("Student not found");
//   }
// };

// updateStudentsGrade(3, "D");

// *-------
// * Array in Objects
// *-------

// Scenario:Managing a Simple to do list

//We'll create a simple ToDoList object that has a tasks array property. Each object inside the task array will have properties like 'id' 'description' and copmleted

const todoList = {
  title: "Todo List Application",
  tasks: [
    { id: 1, description: "Buy Groceries", completed: false },
    { id: 2, description: "Go to Gym", completed: true },
    { id: 3, description: "Call Mom", completed: false },
  ],
};

// Accessing properties

const todoTile = todoList.title;

// tasks
const allTasks = todoList.tasks[0];
// console.log(allTasks);

// Function to add a task
const addTask = (description) => {
  // get new id

  const newId = todoList.tasks.length + 1;
  const newTask = {
    id: newId,
    description,
    completed: false,
  };

  // push the new task into  the original task

  todoList.tasks.push(newTask);
};

addTask("Programming");
// console.log(todoList);

// Function to mark a task as completed

// const markAsCompleted = (id) => {
// find task

//   const foundTask = todoList.tasks.find((task) => task.id === id);
//   if (foundTask) {
//     foundTask.completed = true;
//   } else {
//     console.log("task Not Found");
//   }
// };
// markAsCompleted(2);
// console.log(todoList);

// *-------
// * Iterate through arrays using 'forEach'
// *-------

// Basic Example

const fruits = [
  { name: "Banana", color: "Yellow" },
  { name: "Apple", color: "Red" },
  { name: "Cherry", color: "red" },
];

// fruits.forEach((current, index, array) => {
//   console.log(current, index, array);
// });

// Case study: Oonline Shooping cart Calculation
//  Suppose you  are working on an e-commerce website/ and now you need to calculate the total price of items in a user's shopping cart.Each item in the cart is represented as an object in an array with properties such 'name', 'price', and 'quantity'. Your task is to calculate the total cost of items ion the cart and also list the names of all items in the cart for the user's review

// Initial data
const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "Tv", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];
// Calculate the total cost of the items in the cart

let toatlCost = 0;
cart.forEach((item) => {
  // sum all the prodcut prices
  toatlCost += item.price * item.qty;
});

// List all ther names of the products

let productNames = [];

cart.forEach((item) => {
  productNames.push(item.name);
});
// console.log(productNames);

// Calculate the Total Number of Items

let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.qty;
});

// console.log(totalItems);

// *-------
// * Iterate through arrays using 'map()'
// *-------

// Suppose we have an array of products in a shopping cart. Each object represents a product with a price. We want to apply a 10% discount to all products

// Initial Data

const shoppingCart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "Tv", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];

// Add 10% discount
const discountedCart = shoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});
// get all the product name only

const productNamesOnly = shoppingCart.map((product) => {
  return {
    name: product.name,
  };
});
// console.log(productNamesOnly);

// *-------
// * Iterate through arrays using 'filter()'
// *-------

// Filtering Active users

const users = [
  { id: 1, isActive: false, name: "Bob" },
  { id: 2, isActive: true, name: "Emma" },
  ,
  { id: 3, isActive: false, name: "Alice" },
];
//  filter out active users

const activeUsers = users.filter((user) => user.isActive === true);
// console.log(activeUsers);

const transactions = [
  { id: 1, amount: 50 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
];

// filter out all amount above 100

const largeTransactions = transactions.filter(
  (transaction) => transaction.amount > 100
);

// console.log(largeTransactions);

// *-------
// * Iterate through arrays using 'splice()'
// *-------

// Remove inactive users

const usersArr = [
  { id: 1, isActive: false, name: "Bob" },
  { id: 2, isActive: true, name: "Emma" },
  { id: 3, isActive: true, name: "Alice" },
];

// Remove inactive user
// FInd the index of the user to be removed

const indexToRemove = usersArr.findIndex(
  (user) => user.id === 1 && !user.isActive
);

//console.log(indexToRemove);

// use  splice

if (indexToRemove !== -1) {
  usersArr.splice(indexToRemove, 1);
}

// console.log(usersArr);

// Managing playlist

// Music streaming app, add, remove songs,

// Solution

const playlist = [
  { id: "s1", title: "Song-1", artist: "Artist-A" },
  { id: "s2", title: "Song-2", artist: "Artist-B" },
  { id: "s3", title: "Song-3", artist: "Artist-C" },
  { id: "s4", title: "Song-4", artist: "Artist-D" },
];

// Remove song of id s1

const songIndexToRemove = playlist.findIndex((song) => song.id === "s1");
//console.log(songIndexToRemove);

// Remove the song using splice

// if (songIndexToRemove !== -1) {
//   playlist.splice(songIndexToRemove, 1);
// }
// console.log(playlist);

// Move a song od id s1 to third position

const indexToMove = playlist.findIndex((song) => song.id === "s1");

if (indexToMove !== -1) {
  const [songToMove] = playlist.splice(indexToMove, 1);

  playlist.splice(2, 0, songToMove);
}

// Insert new song

const newSong = { id: "s5", title: "Song-5", artist: "Artist-E" };

playlist.splice(4, 0, newSong);
console.log(playlist);
