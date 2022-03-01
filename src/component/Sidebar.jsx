import React from "react";
import { useCategories } from "../context/CategoryProvider";
import { useNavigation } from "../context/NavigationProvider";
import { navlist } from "../utils";

const Sidebar = () => {
  const {currentPage, setCurrentPage} = useNavigation();
  const {categories} = useCategories();
  return (
    <nav className="side-bar">
      <ul className="list-unstyled m-0">
        {navlist.map((item) => {
          return (
            <li
              key={item.id}
              className={`p-2 my-1 cursor-pointer nav-item ${
                item.id === currentPage && "bg-success"
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="font-medium">{item.name}</span>
            </li>
          );
        })}
        {categories.map(({ id, title }) => (
          <li
            key={id}
            className={`p-2 my-1 cursor-pointer nav-item ${
              id === currentPage && "bg-success"
            }`}
            onClick={() => setCurrentPage(id)}
          >
            <span className="font-medium">{title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
