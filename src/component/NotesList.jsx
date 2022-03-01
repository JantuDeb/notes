import React from "react";
import { useCategories } from "../context/CategoryProvider";
import { useNavigation } from "../context/NavigationProvider";
import { useNotes } from "../context/NotesProvider";
import Note from "./Note";
const NotesList = () => {
  const { notes } = useNotes();
  const { currentPage } = useNavigation();
  const { categories } = useCategories();
  let filteredNotes;
  if (categories.some((cat) => cat.id === currentPage)) {
    filteredNotes = notes.filter((note) => note.categoryId === currentPage);
  } else filteredNotes = notes;
  const pinnedNotes = filteredNotes.filter((note) => note.pin === true);
  const unPinnedNotes = filteredNotes.filter((note) => note.pin === false);
  return (
    <div className="py-4 w-full">
      {pinnedNotes.length !== 0 && (
        <p className="px-2 m-0 text-gray font-medium">PINNED</p>
      )}
      <div className="flex wrap w-full">
        {pinnedNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      {unPinnedNotes.length !== 0 && (
        <p className="px-2 m-0 text-gray font-medium">OTHERS</p>
      )}
      <div className="flex wrap w-full">
        {unPinnedNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
