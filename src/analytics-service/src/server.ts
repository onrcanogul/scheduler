require("../../opentelemetry-service/src/tracer");
const app = require("./app").default;
const { connectToDatabase } = require("./repository/database");
const PORT = 3020;

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
