const mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "dbUser",
    password: "dbPassword"
  });
  
class CreateDatabase{
    constructor(dbName){
        this.databaseName = dbName;
    }
    intialize(){ return "CREATE DATABASE " + this.databaseName; }
    
    execute(){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(this.initialize, function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });
        });
    }
}

  

  