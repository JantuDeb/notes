import React, { useState } from "react";
import { useNotes } from "../context/NotesProvider";
import NoteForm from "./NoteForm";

const EditNote = ({ noteToEdit }) => {
  const [note, setNote] = useState(noteToEdit);

  const [expanded, setExpanded] = useState({
    category: false,
    formBody: true,
  });
  const { title, description, id } = note;
  const {updateNote, setIsEditing} = useNotes();

  function changeHandler(event) {
    setNote((note) => ({ ...note, [event.target.name]: event.target.value }));
  }

  function editNote() {
    if (!title || !description || !id) console.log("Add all the fields");
    else {
      updateNote(noteToEdit.id, note);
      setIsEditing((e) => !e);
    }
  }

  return (
    <NoteForm
      note={note}
      setNote={setNote}
      expanded={expanded}
      setExpanded={setExpanded}
      changeHandler={changeHandler}
      saveNote={editNote}
      setIsEditing={setIsEditing}
    />
  );
};

export default EditNote;
