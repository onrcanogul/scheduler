import { NextFunction } from "express";

const express = require("express");
const router = require("./routes/analytics-routes").default;
const { handleError } = require("../../helpers/middlewares/exceptionHandler");

const app = express();

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  handleError(error, res);
});
app.use(express.json());
app.use("/api/analytics", router);

export default app;
