const express = require("express");
const router = require("./routes/user-routes").default;

const app = express();

app.use(express.json());
app.use("/api/users", router);

export default app;
