import express from "express";
import dbConnPool from "../dbconnection/connection";

const router = express.Router();

router.get("/", (req, res) => {
  dbConnPool.getConnection((err, connection) => {
    if (!err) {
      let sql = `SELECT * FROM db1.students;`;
      connection.query(sql, (err, result) => {
        if (err) res.status(500).send(`Error:\n ${err.message}`);
        res.send(result);
      });
      connection.end();
    }
  });
});

export default router;
