// Using 'getAttribute' and 'setAttribute'

const userCard = document.getElementById("userCard");
const userId = userCard.getAttribute("data-user-id");
const userRole = userCard.getAttribute("data-user-role");
console.log(userId);
console.log(userRole);

//Modifying  data attributes

userCard.setAttribute("data-user-role", "super-admin");
userCard.setAttribute("data-position", "Engineer");

console.log(userCard);

///Using dataset

const userRole2 = userCard.dataset.userRole;
console.log(userRole2);
const userId2 = userCard.dataset.userId;
console.log(userId2);
