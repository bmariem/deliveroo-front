import React from "react";

import "./header.css";

const Header = (props) => {
  const { Logo, restaurant } = props;

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Deliveroo Logo" />
      </div>
      <div className="restaurant">
        <div className="container">
          <div className="restaurant-infos">
            <h1 className="title">{restaurant.name}</h1>
            <p className="description">{restaurant.description}</p>
          </div>
          <div className="restaurant-picture">
            <img src={restaurant.picture} alt={restaurant.name} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
