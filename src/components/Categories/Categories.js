import React from "react";

// Components
import Category from "../Category/Category";

// CSS
import "./Categories.css";

const Categories = ({ categories, addMeal }) => {
  return (
    <main>
      <ul className="categories">
        {categories.map((category, index) => {
          return <Category category={category} key={index} addMeal={addMeal} />;
        })}
      </ul>
    </main>
  );
};

export default Categories;
