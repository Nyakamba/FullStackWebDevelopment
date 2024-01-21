const http = require("http");
const url = require("url");

//*Routes
// console.log(http);
//*Define the handler
const requestHandler = (req, res) => {
  //pass the url
  const passedUrl = url.parse(req.url, true);
  //Home route
  if (passedUrl.pathname === "/" && req.method === "GET") {
    //send response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello world. welcome to homepage");
  }
  //about route
  else if (passedUrl.pathname === "/about" && req.method === "GET") {
    //send response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello world. welcome to about page");
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Not Found");
  }
};
//*Create the server
const server = http.createServer(requestHandler);
//*Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
