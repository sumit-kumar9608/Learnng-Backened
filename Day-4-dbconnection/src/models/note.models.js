const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: 10,
  },
});

const NotesModel = mongoose.model("notes", notesSchema)
module.exports = NotesModel;