import React from "react";

// Components
import Meal from "../Meal/Meal";

// CSS
import "./category.css";

const Category = ({ category, index }) => {
  return category.meals.length > 0 ? (
    <li className="category" key={index}>
      <h2 className="category-title">{category.name}</h2>

      <div className="category-meals">
        {category.meals.map((meal, index) => {
          return <Meal meal={meal} key={index} />;
        })}
      </div>
    </li>
  ) : null;
};

export default Category;