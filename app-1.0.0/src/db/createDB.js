import connection from './config';


class CreateDatabase{
    constructor(dbName){
        this.databaseName = dbName;
    }
    sql = "CREATE DATABASE " + this.databaseName + ";" +
            "USE " + this.databaseName + ";";
    // 
    //sql queries for creating tables are required to be inserted
    // 
    execute(){
        connection.connect((err)=>{
            if (err) throw err
            Console.log("Connected")
            connection.query(this.sql, (err)=>{
                if (err) throw err
                Console.log("Database Created")
            })
        })
    }
}  