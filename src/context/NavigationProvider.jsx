import React from "react";
import { useContext,useState } from "react";
import { navlist } from "../utils";

const NavigationContext = React.createContext();
const NavigationProvider = (props) => {
  // const [navLists, setNavLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(navlist[0].id);
  return (
    <NavigationContext.Provider value={{currentPage, setCurrentPage}}>
      {props.children}
    </NavigationContext.Provider>
  );
};

const useNavigation =()=> useContext(NavigationContext)
export  {NavigationProvider,useNavigation };
