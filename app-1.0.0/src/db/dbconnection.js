const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'system',
    password: 'password',
    multipleStatements: true,
    database: 'db1'
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Database connected.")
    } else {
        console.log("Connection Error:\n"+ err)
    }
})
mysqlConnection.end((err)=>{
    if(!err) console.log("Database Connection Closed.")
    else throw err
})
module.exports = mysqlConnection
