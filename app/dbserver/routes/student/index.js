import express from "express";
import { dbConnPool } from "../../dbconnection";
const router = express.Router();

router.get("/", (req, res) => {
  dbConnPool.getConnection((err, connection) => {
    if (!err) {
      connection.query(
        `SELECT * FROM 'db1'.'students';`,
        (err, result, fields) => {
          if (err) {
            console.log(err);
            res.status(500).send(err.stack);
          } else {
            console.log(`${fields} \n\n ${result}`);
            res.json(result);
            res.send(fields);
          }
        }
      );
    }
  });
});

module.exports = router;
