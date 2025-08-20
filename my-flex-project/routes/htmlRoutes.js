const express = require("express");
const path = require("path");
const router = express.Router();

// Serve raw HTML users page
router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/users.html"));
});

module.exports = router;
