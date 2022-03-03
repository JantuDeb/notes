import React, { useState } from "react";
import AddCategory from "../component/AddCategory";
import Category from "../component/Category";
import { useCategories } from "../context/CategoryProvider";

const EditCategory = () => {
  const [value, setValue] = useState("");
  const { categories, addCategories } = useCategories();

  function handleCategoryClick() {
    if (value.length > 2) {
      addCategories(value);
      setValue("");
    }
  }
  return (
    <div className="flex center w-full">
      <ul className="list-unstyled category-list">
        <li className="list-item">
          <AddCategory
            handleCategoryClick={handleCategoryClick}
            value={value}
            setValue={setValue}
          />
        </li>
        {categories.map((cat) => (
          <Category key={cat.id} category={cat} />
        ))}
      </ul>
    </div>
  );
};

export default EditCategory;
