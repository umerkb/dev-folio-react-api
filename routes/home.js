const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola");
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/", (req, res) => {
  res.send(req.body);
});

router.delete("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
