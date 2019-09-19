import mysql from 'mysql'

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'system',
    password: 'password',
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Database connected.")
    } else {
        console.log("Connection Error:\n"+ err)
    }
})

export default mysqlConnection