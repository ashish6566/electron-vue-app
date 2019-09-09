const mysql = require('mysql')

static var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    })

export default connection