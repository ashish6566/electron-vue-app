import express from "express";
import studentRouter from "./routes/student.js";

const port = process.env.PORT || 3000;
const server = express();
let isserver = false;
let dbserver;

async function initserver() {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }), express.json());

  server.use("/api/students", studentRouter);

  server.get("/", (req, res, next) => {
    res.send("School Management System Database Server ");
    next(err => {
      if (err) res.send(err);
    });
  });
}

async function startserver() {
  await initserver();

  if (isserver == false) {
    dbserver = server.listen(port, () => {
      console.log(`- Database Server: http://localhost:${port}/`);
      isserver = true;
    });
  }
}

export default { dbserver, startserver, isserver };
