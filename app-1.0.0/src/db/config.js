const mysql = require('mysql')

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    })

    export default connection