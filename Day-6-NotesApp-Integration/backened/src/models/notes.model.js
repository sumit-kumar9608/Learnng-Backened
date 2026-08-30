const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minimum: [10, "atleast 10 charactrs"],
  },
});

const NotesModel = mongoose.model("notes", notesSchema);
module.exports = NotesModel;