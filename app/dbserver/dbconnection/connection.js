import mysql from "mysql";

var dbconfig = {
  connectionLimit: 12,
  host: "localhost",
  user: "system",
  password: "password",
  multipleStatements: true,
  debug: false
};

export default () => {
  const connectionpool = mysql.createPool(dbconfig);

  connectionpool.on("connection", connection => {
    console.log(`Database Established.\n`);
    connection.on("error", err => {
      console.log(`MySQL Error:\n ${err}`);
    });
    connection.on("end", err => {
      console.log(`Connection Ended: \n ${err}`);
    });
  });
  connectionpool.on("error", err => {
    console.log(`MySQL Error:\n ${err}`);
  });
  connectionpool.on("release", connection => {
    console.log(`Database Connection Released.\n`);
    connection.on("error", err => {
      console.log(`MySQL Error:\n ${err}`);
    });
    connection.on("end", err => {
      console.log(`MySQL Error:\n ${err}`);
    });
  });

  return connectionpool;
};
