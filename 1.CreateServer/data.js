const { error } = require("console");
const http = require("http");
const app = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("This is Home");
    res.statusCode = 200;
  } else if (req.url == "/about") {
    res.write("This is About");
  } else if (req.url == "/contact") {
    res.write("This is Contact");
  } else {
    res.statusCode = 404;
    res.write("Page Not Found 404");
  }
  res.end();
});
app.listen(3000);
