const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Internal created Successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error in create api", error);
  }
};

const getAllNotesController = async (req, res) => {
  try {

    let allNotes = await NotesModel.find();

    return res.status(200).json({
      message: "Data fetched id successfully",
      data: allNotes,
    })
  } catch (error) {
    console.log("error in get all api", error);
  }
};

const getOneNotesController = async (req,res) => {
  try {

    let noteId = req.params.id;

    let ById = await NotesModel.findById(noteId);

    return res.status(200).json({
      message: "Note by id fetched successfully",
      data: ById,
    })
  } catch (error) {
    console.log("error in get one api", error);
  }
};

const updateNotesController = async (req,res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "notes is updated",
      data: updateNote,
    })

  } catch (error) {
    console.log("error in update in api", error);
  }
}
const deleteNotesController = async (req,res) => {
  try {
    let noteId = req.params.id;

    let deleteNote = await NotesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "note is deleted",
    })

  } catch (error) {
    console.log("error in delete api",error);
  }
}


module.exports = {
  createNotesController,
  getAllNotesController,
  getOneNotesController,
  updateNotesController,
  deleteNotesController,
};
