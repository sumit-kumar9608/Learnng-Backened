import React from "react";

const NoteCard = ({note, deleteNotes, NoteForUpdate}) => {
  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>

          <p className="text-sm text-gray-500 mt-1">
            {note.description}
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <button onClick={() => NoteForUpdate(note)} className="text-sm px-3 py-1.5 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
            Update
          </button>

          <button onClick={() => deleteNotes(note._id)} className="text-sm px-3 py-1.5 rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
