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
