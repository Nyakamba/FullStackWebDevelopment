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
console.log(students);

// Upgrade student

const updateStudentsGrade = (id, newGrade) => {
  const studentFounnd = students.find((student) => {
    return student.id === id;
  });

  if (studentFounnd) {
    studentFounnd.grade = newGrade;
  } else {
    console.log("Student not found");
  }
};

updateStudentsGrade(3, "D");

// *-------
// * Array in Objects
// *-------

// Scenario:Managing a Simple to do list

//We'll create a simple ToDoList object that has a tasks array property. Each object inside the task array will have properties like 'id' 'description' and copmleted

const todoList ={
  tittl:"Todo List Application"
  tasks:[
    [{id:, description:"BUY Groceries", completed:false}]
  ]
}