const express = require("express");
const router = express.Router();
const db = require("../DbContext/db");

router.put("/:id", (req, res) => {
  console.log(req.body);
  db.any(
    `UPDATE public.request 
  SET status = ${req.body.status}
  WHERE id = ${req.params.id}
  `
  )
    .then((row) => {
      res.json(row);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  db.any("SELECT * FROM public.request;")
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
