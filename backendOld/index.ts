export {};
const express = require("express");
require("dotenv").config();
//const app = express();
const cors = require("cors");
const DB_PORT = process.env.DB_PORT || 5000;
const server = require("./api/server.ts");

server.use(cors());
server.use(express.json());

server.listen(DB_PORT, () => {
  console.log(`Server is listening on port: ${DB_PORT}`);
});
