const express = require("express");
const { createNotesController, getAllNotesController, getOneNotesController, updateNotesController, deleteNotesController } = require("../controllers/notes.controllers");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/getAllData", getAllNotesController);
router.get("/:id", getOneNotesController);
router.put("/:id", updateNotesController);
router.delete("/:id", deleteNotesController);

module.exports = router;
