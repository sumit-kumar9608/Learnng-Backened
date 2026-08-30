const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.route")

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}),
)

app.use(express.json());

connectDB();

app.get("/", (req,res) => {
  res.send("yeahhhhhhhhhhhhhh huuuuuuuuuuuuuuuuuuuuuuuuuuuuuu......")
});

app.use("/notes", notesRouter);









module.exports = app;