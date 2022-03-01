import React from "react";

const Select = ({setSelectedCategory, selectedCategory}) => {
  return (
    <select
      name="category"
      id="category"
      className="m-2"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="home">Home</option>
      <option value="work">Work</option>
      <option value="general">General</option>
    </select>
  );
};

export default Select;
