import React from "react";
import AddNote from "../component/AddNote";
import NotesList from "../component/NotesList";

const Notes = () => {
  return (
    <div className="flex-col grow  items-center">
      <AddNote />
      <NotesList />
    </div>
  );
};

export default Notes;
