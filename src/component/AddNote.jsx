import React, { useState } from "react";
import { useNotes } from "../context/NotesProvider";
import { v4 } from "uuid";
import NoteForm from "./NoteForm";

const AddNote = () => {
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    pin: false,
    color: "bg-white",
    categoryId: "",
  });

  const [expanded, setExpanded] = useState({
    category: false,
    formBody: false,
  });
  const { title, description } = note;
  const { setNotes, isEditing, setIsEditing } = useNotes();

  function changeHandler(event) {
    setNote((note) => ({ ...note, [event.target.name]: event.target.value }));
  }

  function saveNote() {
    if (!title || !description) console.log("Add all the fields");
    else {
      const newNote = {
        ...note,
        id: v4(),
      };
      setNotes((notes) => [...notes, newNote]);
      setNote({
        id: "",
        title: "",
        description: "",
        pin: false,
        color: "bg-white",
        categoryId: "",
      });
      setExpanded({formBody:false})
    }
  }

  return expanded.formBody && !isEditing ? (
    <NoteForm
      note={note}
      setNote={setNote}
      expanded={expanded}
      setExpanded={setExpanded}
      changeHandler={changeHandler}
      saveNote={saveNote}
      setIsEditing={setIsEditing}
    />
  ) : (
    <div
      onClick={() => setExpanded((v) => ({ ...v, formBody: !v.formBody }))}
      className="form-container border items-start shadow-gray p-2 radius-md text-dark cursor-auto"
    >
      Take a note
    </div>
  );
};

export default AddNote;
