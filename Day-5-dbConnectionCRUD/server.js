require("dotenv").config();

console.log("MONGO URI =", process.env.MONGODB_URI);

const app = require("./src/app");

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});