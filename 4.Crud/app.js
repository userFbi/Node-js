const express = require("express");
const app = express();
const fs = require("fs");

let stData = [];

let fileData = fs.readFileSync("data.json", "utf-8");

if (fileData != "") {
  stData = JSON.parse(fileData);
}

app.get("/", (req, res) => {
  res.render("index.ejs", { stData });
});
app.get("/createData", (req, res) => {
  const data = req.query;
  console.log(data);

  stData.push(data);
  fs.writeFileSync("data.json", JSON.stringify(stData));

  res.redirect("/");
});

app.listen(3000);
