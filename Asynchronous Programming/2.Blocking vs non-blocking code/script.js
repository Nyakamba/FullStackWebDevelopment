//---Create a blocking ----

// console.log("Starting Blocking Operations");

//-----Create blocking code
//for (let i = 0; i < 1e9; i++) {
//do somthing
//console.log(i);

// console.log("Finished Blocking Operations");

//--Create a non-blocking---

console.log("starting non blocking operation");

setTimeout(() => {
  console.log("Executing delay");
}, 4000);
console.log("Finshed non bocking operation");
