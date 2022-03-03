import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
const CategoryContext = createContext([]);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
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

  function deleteCategory(id) {
    setCategories((categories) => categories.filter((cat) => cat.id !== id));
  }

  function updateCategory({ id, title }) {
    if (title && title.length > 2) {
      setCategories((categories) =>
        categories.map((cat) => (cat.id === id ? { id, title } : cat))
      );
    }
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategories,
        getCategoryTitle,
        deleteCategory,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategories = () => useContext(CategoryContext);
export { CategoryProvider, useCategories };
