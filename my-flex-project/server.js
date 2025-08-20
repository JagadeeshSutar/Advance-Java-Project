const express = require("express");
const path = require("path");

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static("public"));

// Routes
const apiRoutes = require("./routes/api");
const ejsRoutes = require("./routes/ejsRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use("/api", apiRoutes);
app.use("/ejs", ejsRoutes);
app.use("/html", htmlRoutes);

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
