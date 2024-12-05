"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = require("./routes/appointment-routes").default;
const app = express();
app.use(express.json());
app.use("/api/appointment", router);
exports.default = app;
