const express = require("express");
const app = express;

app.get("/", (res, req) => {
  res.send("This is HomePage");
});
app.listen(3000);
