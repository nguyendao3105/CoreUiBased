const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");

const db = require("./DbContext/db");

app.use(express.json());
app.use(cors());

const usersRouter = require("./Router/users");
const danhhieuRouter = require("./Router/danhhieu");
const requestRouter = require("./Router/request");

app.use("/users", usersRouter);
app.use("/danhhieu", danhhieuRouter);
app.use("/requests", requestRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
