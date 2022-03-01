import React, { createContext, useContext, useState } from "react";
const NotesContext = createContext([]);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  function updateNote(id = "", noteInfo = {}) {
    setNotes((notes) =>
      notes.map((note) => (note.id === id ? { ...note, ...noteInfo } : note))
    );
  }


  function deleteNote(id = "") {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{notes, setNotes, updateNote, deleteNote, isEditing, setIsEditing}}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
