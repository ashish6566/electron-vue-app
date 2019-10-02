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
            res.status(500).send(err.stack);
          } else {
            res.json(result);
            res.send(fields);
          }
        }
      );
    }
  });
});
