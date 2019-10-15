import express from "express";
// import dbConnPool from "./dbconnection/connection";
import studentRouter from "./routes/student.js";

const port = process.env.PORT || 3000;
const server = express();
let isserver = false;
let dbserver;

function initserver() {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }), express.json());

  server.use("/api/students", studentRouter);
}

async function startserver() {
  if (isserver == false) {
    dbserver = await server.listen(port, () => {
      console.log(`Server listening to PORT ${port}`);
      isserver = true;
    });
  }
}
// export let dbserver = server.listen(port, () => {
//   console.log(`Server Running in ${port}`);
// });
export default { dbserver, startserver, initserver, isserver };
