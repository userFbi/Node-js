const express = require("express");
const app = express();
const fs = require("fs");

let stData = [];
let editid = null;
let fileData = fs.readFileSync("data.json", "utf-8");

if (fileData != "") {
  stData = JSON.parse(fileData);
}

app.get("/", (req, res) => {
  res.render("index.ejs", { stData, edit: null });
});

app.get("/createData", (req, res) => {
  // get
  const data = req.query;
  console.log(data);

  if (editid != null) {
    stData[editid] = data;
    editid = null;
  } else {
    stData.push(data);
  }

  fs.writeFileSync("data.json", JSON.stringify(stData));

  res.redirect("/");
});

app.get("/deleteData/:deleteId", (req, res) => {
  const id = req.params.deleteId;

  stData.splice(id, 1);
  fs.writeFileSync("data.json", JSON.stringify(stData));
  res.redirect("/");
});

app.get("/updateData/:editId", (req, res) => {
  editid = req.params.editId;
  const edit = stData[editid];
  console.log(edit);

  res.render("index.ejs", { edit, stData });
});

app.listen(3000);
