import React from "react";

// ICONS
import StarIcon from "../StarIcon";

// CSS
import "./meal.css";

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <div className="meal-card">
        <div className="meal-infos">
          <h3 className="title">{meal.title}</h3>
          {meal.description && (
            <p className="description">{meal.description}</p>
          )}
          <p className="more-infos">
            <span className="price">{meal.price} €</span>
            {meal.popular && (
              <span className="popular-food">
                <StarIcon
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                Populaire
              </span>
            )}
          </p>
        </div>
        {meal.picture && (
          <div className="meal-picture">
            <img src={meal.picture} alt={meal.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
