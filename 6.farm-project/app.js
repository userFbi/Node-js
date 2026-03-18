const express = require("express");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");

let stData = [];

let fileData = fs.readFileSync("data.json", "utf-8");

if (fileData != "") {
  stData = JSON.parse(fileData);
}

app.get("/", (req, res) => {
  res.render("index.ejs", { stData });

  fs.writeFileSync("data.json", JSON.stringify(stData));
});

app.get("/product/:prodcutId", (req, res) => {
  const id = req.params.prodcutId;
  const data = stData[id];

  res.render("product.ejs", { data });
});

app.listen(3000);
