const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/users", async (req, res) => {
  try {
    const response = await fetch("http://localhost:8080/users");
    const users = await response.json();
    res.render("index", { users }); // Pass to EJS
  } catch (error) {
    console.error(error);
    res.send("Error fetching users");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
