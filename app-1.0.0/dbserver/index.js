import express from "express";
import bodyParser from "body-parser";
import { dbConnPool } from "./dbconnection"; //remove any one in case that one is not utilized.

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//catch connection disconnection
dbConnPool.on("connection", connection => {
  console.log(`Database Established.\n`);

  connection.on("error", err => {
    console.error(`MySQL Error:\n ${err}`);
  });

  connection.on("end", err => {
    console.error(`Connection Ended: \n ${err}`);
  });
});

server.listen(process.env.PORT || "3000", () => {
  console.log(`Server Listening to ${process.env.PORT || "3000"}`);
});
