import React, { useState } from "react";

function CategoryFilter({ categories, handleCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategory = (category) => {
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  const categoryButtons = categories.map((category) => (
    <button
      key={category}
      onClick={() => handleCategory(category)}
      className={selectedCategory === category ? "selected" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key="All"
        onClick={() => handleCategory("All")}
        className={selectedCategory === "All" ? "selected" : ""}
      >
        All
      </button>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
