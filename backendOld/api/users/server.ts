export {};
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const server = express();

const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");
const noteRouter = require("./notes/notes-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/notes", noteRouter);

module.exports = server;
