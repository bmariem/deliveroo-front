import React from "react";

// Components
import Category from "../Category/Category";

// CSS
import "./categories.css";

const Categories = ({ categories }) => {
  return (
    <main>
      <div className="container">
        <ul className="categories">
          {categories.map((category, index) => {
            return <Category category={category} key={index} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Categories;
