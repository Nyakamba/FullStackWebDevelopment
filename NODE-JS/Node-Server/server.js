//* import required modules
const http = require("http");
// console.log(http);
//*Define the handler
const requestHandler = (req, res) => {
  //send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world. this is my first Node js server");
};
//*Create the server
const server = http.createServer(requestHandler);
//*Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
