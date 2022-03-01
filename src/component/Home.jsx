import React from "react";
import { useCategories } from "../context/CategoryProvider";
import { useNavigation } from "../context/NavigationProvider";
import Category from "../pages/Category";
import Notes from "../pages/Notes";

const Home = () => {
  const { currentPage } = useNavigation();
  const { categories } = useCategories();
  return (
    <>
      {currentPage === "notes" && <Notes />}
      {currentPage === "category" && <Category />}
      {categories.some(cat=>cat.id===currentPage)&&<Notes/>}
    </>
  );
};

export default Home;
