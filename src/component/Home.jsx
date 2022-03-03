import React from "react";
import { useCategories } from "../context/CategoryProvider";
import { useNavigation } from "../context/NavigationProvider";
import EditCategory from "../pages/EditCategory";
import Notes from "../pages/Notes";

const Home = () => {
  const { currentPage } = useNavigation();
  const { categories } = useCategories();
  return (
    <>
      {currentPage === "notes" && <Notes />}
      {currentPage === "category" && <EditCategory />}
      {categories.some(cat=>cat.id===currentPage)&&<Notes/>}
    </>
  );
};

export default Home;
