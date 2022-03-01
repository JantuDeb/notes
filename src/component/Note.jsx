import React, { useState } from "react";
import { BsPinFill, BsPin } from "react-icons/bs";
import { MdOutlineColorLens, MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useCategories } from "../context/CategoryProvider";
import { useNotes } from "../context/NotesProvider";
import { colors } from "../utils";
import EditNote from "./EditNote";

const Note = ({ note }) => {
  const [showColors, setShowColors] = useState(false);
  const { id, title, pin, description, color, categoryId } = note;
  const { getCategoryTitle } = useCategories();
  const { updateNote, deleteNote, isEditing, setIsEditing } = useNotes();

  function colorClickHandler(color) {
    updateNote(id, { color });
    setShowColors((c) => !c);
  }

  return (
    <div className={`p-2 m-2 border radius-md note ${color}`}>
      <div className="flex justify-between">
        <h4>{title}</h4>
        <span
          className="icon-action flex center"
          onClick={() => updateNote(id, { pin: !pin })}
        >
          {pin ? <BsPinFill size="20px" /> : <BsPin size="20px" />}
        </span>
      </div>
      <p>{description}</p>
      <div className="flex items-center justify-between">
        <span className="radius-md px-2 bg-semi-transparent">
          {getCategoryTitle(categoryId)}
        </span>
        <div className="flex item-center">
          <span className="icon-action flex center">
            <MdOutlineColorLens
              size="20px"
              className="cursor-pointer"
              onClick={() => setShowColors((c) => !c)}
            />
          </span>
          <span className="icon-action flex center">
            <FaRegEdit
              size="20px"
              className="cursor-pointer"
              onClick={() => setIsEditing((isEditing) => !isEditing)}
            />
          </span>
          <span className="icon-action flex center">
            <MdOutlineDelete
              size="20px"
              className="cursor-pointer"
              onClick={() => deleteNote(id)}
            />
          </span>
        </div>
      </div>
      <div className="colors-container flex center">
        {showColors && (
          <div className="flex bg-white radius-md shadow-gray colors-bar p-1 border">
            {colors.map((c, index) =>
              index === 0 ? (
                <div
                  key={c}
                  onClick={() => colorClickHandler(c)}
                  className={`${c} color-box border`}
                ></div>
              ) : (
                <div
                  key={c}
                  onClick={() => colorClickHandler(c)}
                  className={`${c} color-box`}
                ></div>
              )
            )}
          </div>
        )}
      </div>

      {isEditing && (
        <div className="edit-box flex center">
          <EditNote noteToEdit={note} />
        </div>
      )}
    </div>
  );
};

export default Note;
