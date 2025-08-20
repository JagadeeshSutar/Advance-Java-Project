const express = require("express");
const router = express.Router();

// Mock API (instead of DB)
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Jagadeesh" },
    { id: 2, name: "Krishna" },
    { id: 3, name: "Manju" },
  ]);
});

module.exports = router;
