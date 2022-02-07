import React from "react";

// Components
import Meal from "../Meal/Meal";

// CSS
import "./category.css";

const Category = ({ category }) => {
  return category.meals.length > 0 ? (
    <li className="category">
      <h2 className="category-title">{category.name}</h2>

      <div className="category-meals">
        {category.meals.map((meal) => {
          return <Meal meal={meal} key={meal.id} />;
        })}
      </div>
    </li>
  ) : null;
};

export default Category;
