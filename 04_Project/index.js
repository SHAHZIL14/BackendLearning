import express, { urlencoded } from "express";
import { config } from "./config/config.js";
import { connect } from "./src/Database/DBConnect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// modules
const APP = express();

APP.use(
  cors({
    credentials: true,
  })
);

APP.use(
  express.json({
    limit: "16kb",
  })
);
APP.use(
  urlencoded({
    extended: true,
    limit: "16kb",
  })
);
APP.use(express.static("/public"));
APP.use(cookieParser());
//Middleware


import router from "./src/routes/user.routes.js";

APP.use("/api/v1/users",router);
//Routes

APP.get("/", (req, res) => {
  res.send("Versia server");
});

APP.listen(config.port, () => {
  console.log(`App starts listening on port: ${config.port}`);
});

connect();
