const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("HOla");
});

module.exports = router;
