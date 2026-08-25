const app = require("./src/app");

let port = 3000;

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
