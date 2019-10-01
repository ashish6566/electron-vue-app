import express from "express";
import bodyParser from "body-parser";
import dbConnection, { connpool } from "./dbconnection";

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
