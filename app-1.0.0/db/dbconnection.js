const mysql = require("mysql");

export const dbconfig = {
  host: "localhost",
  user: "system",
  password: "password",
  multipleStatements: true
};

export const mysqlConnection = mysql.createConnection({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  multipleStatements: dbconfig.multipleStatements,
  database: "db1"
});

mysqlConnection.connect(err => {
  if (!err) {
    console.log("Database connected.");
  } else {
    console.log("Connection Error:\n" + err);
  }
});
mysqlConnection.end(err => {
  if (!err) console.log("Database Connection Closed.");
  else throw err;
});
export default mysqlConnection;
