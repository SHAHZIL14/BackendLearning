import express from "express";
import { config } from "./config/config.js";
import {connect} from "./src/Database/DBConnect.js";
// modules

const APP = express();

APP.get("/", (req, res) => {
  res.send("Versia server");
});

APP.listen(config.port, () => {
  console.log(`App starts listening on port: ${config.port}`);
});

connect();
