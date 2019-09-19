import express from 'express'
import bodyParser from 'body-parser'
import mysqlConnection from './dbconnection.js'

var app = express()
app.use(bodyParser.json())

app.listen(3000, (err) => {
    if (!err) {
        console.log("App running at port: 3000.")
    } else {
        console.log("Error in creating express app")
    }
});

app.get('/usedb', (req, res) => {
    let sql = 'USE db1;';
    mysqlConnection.query(sql, (err, result) => {
        if (!err) {
            console.log(result)
            res.send("Database in use.")
        } else(
            res.send(err)
        )
    })
})