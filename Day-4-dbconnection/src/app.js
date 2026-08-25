const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.models");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Have done");
  res.send("okii");
});

app.post("/create", async (req,res) => {
  let {topic, description} = req.body;

  const newNote = await NotesModel.create({
    topic,
    description,
  })

  res.send({
    success:true,
    message: "Note created successfully",
    data: newNote,
  })

})

connectDb();

module.exports = app;
