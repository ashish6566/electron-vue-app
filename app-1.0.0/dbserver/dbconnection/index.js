import mysql from "mysql";

var dbconfig = {
  connectionLimit: 12,
  host: "localhost",
  user: "system",
  password: "password",
  multipleStatements: true,
  debug: false
};

const connection = mysql.createConnection(dbconfig);
const connectionpool = mysql.createPool(dbconfig);

export { connectionpool as dbConnPool };
export { connection as dbConn };
