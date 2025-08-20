const express = require("express");
const router = express.Router();

// EJS dashboard
router.get("/dashboard", (req, res) => {
  res.render("pages/dashboard", {
    username: "Jagadeesh",
    title: "Dashboard",
  });
});

// EJS about page
router.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Us" });
});

module.exports = router;
