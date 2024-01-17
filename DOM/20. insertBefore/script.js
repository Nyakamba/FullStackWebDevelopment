// Complex exapmle to manage a list of students based on the grades

//Function to add new student

function addStudent(name, grade) {
  //Create a new div element to hold the student info

  const studentEl = document.createElement("div");

  //add css to it

  studentEl.className = "student";

  //craete a text node containing the student name and grade

  const studentTextNode = document.createTextNode(`${name}: ${grade}`);

  //append the text node to the div element

  studentEl.appendChild(studentTextNode);

  //select the container
  const containerEl = document.getElementById("studentList");

  let beforeNode = null;

  //Loop through existing students to find the correct position for the new student

  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }

  //insert the new student in the correct position
  containerEl.insertBefore(studentEl, beforeNode);
  console.log(studentEl);
}

addStudent("Enock", 99);
addStudent("Alice", 90);
addStudent("Ben", 86);
addStudent("Allison", 69);
addStudent("John", 100);
