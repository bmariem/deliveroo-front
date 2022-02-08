import React from "react";

// Components
import Order from "../Order/Order";

// CSS
import "./BasketMenu.css";

const Basket = ({ basket, addOrder, removeOrder, subTotal, deliveryCosts }) => {
  return (
    <div className="basket">
      <div className="basket-content">
        <button className={basket.length === 0 ? "disabled" : ""}>
          Valider mon panier
        </button>
        {basket.length === 0 ? (
          // Panier vide
          <div className="basket-empty">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          // Panier rempli
          <>
            {basket.map((order) => {
              return (
                order.quantity > 0 && (
                  <Order
                    order={order}
                    key={order.id}
                    addOrder={addOrder}
                    removeOrder={removeOrder}
                  />
                )
              );
            })}
            <div className="results">
              <p>
                <span className="title">Sous total </span>
                <span className="amount">{subTotal(basket)} €</span>
              </p>
              <p>
                <span className="title">Frais de livraison</span>
                <span className="amount">{deliveryCosts} €</span>
              </p>
            </div>
            <p className="total">
              <span className="title">Total</span>
              <span className="amount">
                {Number(subTotal(basket) + Number(deliveryCosts))} €
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
