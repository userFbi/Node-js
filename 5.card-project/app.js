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

  fs.writeFileSync("data.json", JSON.stringify(stData));
});

app.get("/cardDetail/:cardId", (req, res) => {
  const index = req.params.cardId;
  console.log("index:", index);
  const userData = stData.find((item) => item.id == index);
  console.log(userData);
  res.render("product.ejs", { userData });
});

app.listen(3000);
