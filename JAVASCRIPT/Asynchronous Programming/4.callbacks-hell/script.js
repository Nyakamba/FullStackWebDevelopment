//* -------Nested Tmeout Functions-------

const task1 = (callback) => {
  setTimeout(() => {
    console.log("Task 1 completed");

    callback();
  }, 3000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log("Task 2 completed");

    callback();
  }, 2000);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log("Task 3 completed");

    callback();
  }, 1000);
};

//start the first task

// task1(function () {
//   //Once the first task is completed start the second task
//   task2(function () {
//     //Once the second task is completed start task three
//     task3(function () {
//       console.log("All the tasks completed");
//     });
//   });
// });

//* ---fetch user data---

const userData = { id: 1, name: "Agnes Appia" };
const userPosts = [
  { id: 101, comment: "Post 1" },
  { id: 102, comment: "Post 2" },
];

const postComments = {
  101: ["comment 1", "comment"],
  102: ["comment 2", "comment"],
};

// fetch user data
const fetchUserData = (userId, callback) => {
  console.log("Fetching user data...");
  setTimeout(() => {
    callback(userData);
  }, 1000);
};

// fetch user posts
const fetchUserPosts = (userId, callback) => {
  console.log("Fetching user posts...");
  setTimeout(() => {
    callback(userPosts);
  }, 1000);
};

// fetch posts comments
const fetchPostComments = (postId, callback) => {
  console.log("Fetching post comments...");
  setTimeout(() => {
    callback(postComments[postId] || []);
  }, 1000);
};

//e the process

fetchUserData(1, function (userData) {
  console.log("User data:", userData);
  fetchUserPosts(userData.id, function (userPosts) {
    console.log("User posts:", userPosts);
    userPosts.forEach((post) => {
      console.log("Post", post);
      fetchPostComments(post.id, function (comments) {
        console.log("Comments:", comments);
      });
    });
  });
});
