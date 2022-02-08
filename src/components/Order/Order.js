import React from "react";

// CSS
import "./Order.css";

const Order = ({ order, addOrder, removeOrder }) => {
  return (
    <div className="orders">
      <div className="order-line">
        <p className="counter">
          <button className="remove" onClick={() => removeOrder(order)}>
            -
          </button>

          {order.quantity}

          <button className="add" onClick={() => addOrder(order)}>
            +
          </button>
        </p>

        <p className="order-infos">
          <span className="title">{order.title}</span>
          <span className="price">
            {Math.ceil(Number(order.price) * Number(order.quantity) * 100) /
              100}
            €
          </span>
        </p>
      </div>
    </div>
  );
};

export default Order;
