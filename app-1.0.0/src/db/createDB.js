import connection from './config';

class CreateDatabase{
    constructor(dbName){
        this.databaseName = dbName;
    }
    sql = "CREATE DATABASE " + this.databaseName + ";" +
            "USE " + this.databaseName + ";";
    // connection.connect()
}