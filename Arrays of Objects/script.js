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
