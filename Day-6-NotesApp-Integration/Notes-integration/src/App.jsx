import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [updateNoteId, setUpdateNotesId] = useState(null);

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/getAllData");
      // console.log(res);
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get api", error);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  let deleteNotes = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      getAllNotes();
    } catch (error) {
      console.log("error in delete", error);
    }
  };

  let handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (updateNoteId) {
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues,
      );
      setUpdateNotesId(null);
      setFormValues({
        title: "",
        description: ""
      })
      getAllNotes()
    } else {
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
      console.log(res.data);
      setFormValues({
        title: "",
        description: "",
      });
      getAllNotes();
    }
  };

  let noteForUpdate = (note) => {
    setUpdateNotesId(note._id)
    console.log(note);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Create Note Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-gray-800">Create Note</h1>

        <input
          onChange={handleChange}
          value={formValues.title}
          name="title"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-amber-400"
          placeholder="Title"
        />

        <textarea
          onChange={handleChange}
          value={formValues.description}
          name="description"
          className="w-full h-32 border border-gray-300 rounded-lg p-3 outline-none resize-none focus:border-amber-400"
          placeholder="Write your note..."
        />

        <button
          type="submit"
          className="bg-amber-400 text-white py-3 rounded-lg font-medium hover:bg-amber-500 transition"
        >
          {updateNoteId ? "Update Note" : "Create Note"}
        </button>
      </form>

      <div>
        {allNotes.map((val) => {
          return (
            <NoteCard
              key={val._id}
              note={val}
              deleteNotes={deleteNotes}
              NoteForUpdate={noteForUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
