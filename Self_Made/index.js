const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server started");

  // Basic routing
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the home page");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is the about page");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Server is serving on port 4000");
});
