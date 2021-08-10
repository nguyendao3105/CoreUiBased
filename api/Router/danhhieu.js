const express = require("express");
const router = express.Router();
const db = require("../DbContext/db");

router.delete("/:id", (req, res) => {
  db.any(`DELETE FROM public.danhhieu WHERE id = ${req.params.id}`)
    .then((row) => {
      res.json(row);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", (req, res) => {
  db.any(`SELECT * FROM public.danhhieu WHERE id = ${req.params.id}`)
    .then((row) => {
      res.json(row);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  db.any("SELECT * FROM public.danhhieu ORDER BY id")
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/", (req, res) => {
  db.any(
    `INSERT INTO public.danhhieu(name,requirements)
  VALUES('${req.body.name}','${req.body.req}') RETURNING *;`
  )
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.put("/:id", (req, res) => {
  console.log(req.body);
  db.any(
    `UPDATE public.danhhieu 
  SET name = '${req.body.name}', requirements = '${req.body.requirements}'
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
module.exports = router;
