let express = require("express")

let app = express();

app.use(express.json());

let port = 3000;
let users = [];

app.get("/", (req,res) => {
  res.send("api is calling")
})

app.get("/products", (req,res) => {
  res.send(users);
})

app.post("/create", (req,res) => {
  let body = req.body;
  users.push(body);
  res.send("users send successfully")
})

app.delete("/delete/:id", (req,res) => {
  let { id } = req.params;

  console.log("user is deleted");
  let usersData = users.filter((val) => val.id !== id);
  users = usersData;
  res.send(usersData)
})

app.put("/update/:id", (req,res) => {
  let {name} = req.body;
  let { id } = req.params;

  let updateData = users.map((val) => val.id === id? {...val, name}: val);
  users=updateData;
  res.send(updateData)
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})