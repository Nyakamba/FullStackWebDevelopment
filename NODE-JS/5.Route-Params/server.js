const http = require("http");
const url = require("url");

//*Routes
// console.log(http);
//*Define the handler
const requestHandler = (req, res) => {
  //pass the url
  const passedUrl = url.parse(req.url, true);
  const pathname = passedUrl.pathname;
  //split pathname
  const pathComponent = pathname.split("/").filter(Boolean);
};
//*Create the server
const server = http.createServer(requestHandler);
//*Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
