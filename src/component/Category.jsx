import React, { useState } from "react";
import { useCategories } from "../context/CategoryProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete, MdDone } from "react-icons/md";

const Category = ({ category }) => {
  const { title, id } = category;
  const [value, setValue] = useState(title);
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);

  const { updateCategory, deleteCategory } = useCategories();

  return (
    <li key={id} className="list-item flex justify-between center">
      <p className="m-0 text-center">{title}</p>
      <span className="icon-action flex center">
        {isCategoryEditing ? (
          <div className="flex items-center">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <span className="p-1">
              <MdDone
                size="20px"
                className="cursor-pointer"
                onClick={() => {
                  updateCategory({ id, title: value });
                  setIsCategoryEditing(false);
                }}
              />
            </span>
          </div>
        ) : (
          <FaRegEdit
            size="20px"
            className="cursor-pointer"
            onClick={() => setIsCategoryEditing(true)}
          />
        )}
      </span>
      <span className="icon-action flex center">
        <MdOutlineDelete
          size="20px"
          className="cursor-pointer"
          onClick={() => deleteCategory(id)}
        />
      </span>
    </li>
  );
};

export default Category;
