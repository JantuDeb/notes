import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
const CategoryContext = createContext([]);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState("");

  function addCategories(title) {
    if (!categories.some((cat) => cat.title === title)) {
      const newCategory = { id: v4(), title };
      setCategories((categories) => [...categories, newCategory]);
      return newCategory.id;
    }
  }

  function getCategoryTitle(id) {
    if (id) return categories.find((cat) => cat.id === id)?.title;
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategories,
        getCategoryTitle,
        currCategory,
        setCurrCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategories = () => useContext(CategoryContext);
export { CategoryProvider, useCategories };
