import React from "react";
import { BsPinFill, BsPin } from "react-icons/bs";
import CategorySelector from "./CategorySelector";
import Colors from "./Colors";

const NoteForm = ({
  note,
  setNote,
  saveNote,
  expanded,
  setExpanded,
  changeHandler,
  setIsEditing,
}) => {
  const { title, description, pin, color, categoryId } = note;
  return (
    <div className="form-container border items-start p-1 radius-md text-dark bg-white shadow-gray">
      <div className={`flex justify-between radius-top-md ${color}`}>
        <input
          placeholder="Title"
          value={title}
          onChange={changeHandler}
          name="title"
          className="grow input transparent-input font-medium text-dark"
        />
        <button
          className="p-0 transparent-input p-1 flex center"
          onClick={() => setNote((v) => ({ ...v, pin: !v.pin }))}
        >
          {pin ? <BsPinFill size="20px" /> : <BsPin size="20px" />}
        </button>
      </div>
      <div className="flex-col">
        <textarea
          placeholder="Add a note ..."
          name="description"
          onChange={changeHandler}
          value={description}
          className={`text-area transparent-input ${color} text-dark`}
          rows={5}
        />
        <div className="colors">
          <span>Choose colors</span>
          <Colors note={note} setNote={setNote} />
        </div>
        <div className="flex m-1 items-center justify-between">
          <CategorySelector
            expanded={expanded}
            setExpanded={setExpanded}
            categoryId={categoryId}
            setNote={setNote}
          />
          <div>
            <button
              onClick={() => {
                setExpanded((v) => ({ ...v, formBody: !v.formBody }));
                setIsEditing(false);
              }}
              className="btn-outline-danger radius-md m-2"
            >
              Cancel
            </button>
            <button
              onClick={saveNote}
              className="btn-outline-success radius-md m-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
