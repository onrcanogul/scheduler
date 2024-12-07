require("../../opentelemetry-service/src/tracer");
const app = require("./app").default;

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
