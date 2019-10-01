import express from "express";
import bodyParser from "body-parser";
import { dbConn, dbConnPool } from "./dbconnection"; //remove any one in case that one is not utilized.

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// to-do:-
// server.get("/selectdb", (req, res) => {
//   dbConnection.query;
// });

server.listen(process.env.PORT || "3000", () => {
  console.log(`Server Listening to ${process.env.PORT || "3000"}`);
});
