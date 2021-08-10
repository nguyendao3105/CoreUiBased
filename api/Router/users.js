const express = require("express");
const router = express.Router();
const db = require("../DbContext/db");

router.get("/:id", (req, res) => {
  db.any(`SELECT * FROM public.user WHERE id = ${req.params.id}`)
    .then((row) => {
      res.json(row);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  db.any("SELECT * FROM public.user;")
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
