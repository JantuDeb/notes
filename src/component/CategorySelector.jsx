import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { useCategories } from "../context/CategoryProvider";

const CategorySelector = ({ expanded, setExpanded, categoryId, setNote }) => {
  const [value, setValue] = useState("");
  const {categories, addCategories, getCategoryTitle} = useCategories();

  function handleCategoryClick(id) {
    if (id) {
      setNote((note) => ({ ...note, categoryId: id }));
      setValue("");
      setExpanded((v) => ({ ...v, category: !v.category }));
    }
    if (value.length > 2) {
      const catId = addCategories(value);
      setNote((note) => ({ ...note, categoryId: catId }));
      setValue("");
      setExpanded((v) => ({ ...v, category: !v.category }));
    }
  }
  const catTitle = getCategoryTitle(categoryId);
  return (
    <div className="flex items-center category-container">
      <button
        className="radius-md btn-outline-success flex items-center"
        onClick={() => setExpanded((v) => ({ ...v, category: !v.category }))}
      >
        <span className="mx-1">{categoryId ? catTitle : "Add category"}</span>
        <MdCategory />
      </button>
      <div className={`category ${expanded.category ? "expand" : "collapse"}`}>
        <div className="flex items-center justify-between p-1">
          <input
            type="text"
            placeholder="Enter a new category"
            className="input input-category grow"
            autoFocus={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <BiPlus
            size="20px"
            className="cursor-pointer"
            onClick={() => handleCategoryClick()}
          />
        </div>
        <ul className="m-0  list-unstyled">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="list-item p-0 px-2 cursor-pointer"
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySelector;
