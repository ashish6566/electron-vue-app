import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";

const server = express();
server.use(bodyParser);

server.get("/", (req, res) => {
  res.send("Server Started");
});

server.listen("3030");
