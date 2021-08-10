const initOptions = {
  /* initialization options */
};
const pgp = require("pg-promise")(initOptions);

//const cn = 'postgres://username:password@host:port/database';

const connectionstring = "postgres://postgres:123456@localhost:5432/QLDH";

var db = pgp(connectionstring);

module.exports = db;
