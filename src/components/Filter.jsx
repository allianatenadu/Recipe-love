import React from "react";

const Filter = ({ categoryFilter, setCategoryFilter }) => {
  const categories = ["Vegetarian", "Non-Vegetarian", "Vegan", "Gluten-Free"];

  return (
    <select
      className="border rounded p-2"
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
