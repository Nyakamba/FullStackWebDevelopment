//Accessing global object
//console.log(global);

//adding into the global object
global.myGlobal = "Hello my global";

console.log("Hello my global" in global);
console.log(__filename);
console.log(__dirname);
