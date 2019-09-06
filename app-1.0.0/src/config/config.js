const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "dbUser",
    password: "dbPassword"
  });
  
  function createDatabase(dbname){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE mydb", function (err, result) {
            if (err) throw err;
            console.log("Database created");
          });
  }
  

  });