//Lib
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import Categories from "./components/Categories/Categories";
import BasketMenu from "./components/BasketMenu/BasketMenu";

// CSS
import "./App.css";
import Logo from "./assets/img/Deliveroo_logo.png";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const handleAddMealClick = (meal) => {
    const updatedBasket = [...basket];

    // Verifier si l'ordre est deja dans updatedBasket
    const existingOrder = updatedBasket.filter((element) => {
      return element.id === meal.id;
    });
    if (existingOrder.length > 0) {
      existingOrder[0].quantity += 1;
    } else {
      meal.quantity = 1;
      updatedBasket.push(meal);
    }

    calculateSubtotal(updatedBasket);
    setBasket(updatedBasket);
  };

  const handleRemoveOrderClick = (order) => {
    const updatedBasket = [...basket];

    if (order.quantity <= 0) {
      order.quantity = 0;
    } else {
      order.quantity--;
      calculateSubtotal(updatedBasket);
    }
    setBasket(updatedBasket);
  };

  const handleAddOrderClick = (order) => {
    const updatedBasket = [...basket];
    order.quantity++;
    calculateSubtotal(updatedBasket);
    setBasket(updatedBasket);
  };

  const deliveryCosts = 2.5;

  const sum = (previousValue, currentValue) => previousValue + currentValue;

  const calculateSubtotal = (basket) => {
    const updatedBasket = [...basket];
    let subtotal = updatedBasket
      .map((order) => {
        return Number(order.price) * Number(order.quantity);
      })
      .reduce(sum);
    console.log(subtotal);
    return subtotal;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-back-app.herokuapp.com/"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="App">
      <Header Logo={Logo} restaurant={data.restaurant} />

      <div className="wrapper">
        <Categories categories={data.categories} addMeal={handleAddMealClick} />

        <BasketMenu
          basket={basket}
          addOrder={handleAddOrderClick}
          removeOrder={handleRemoveOrderClick}
          subTotal={calculateSubtotal}
          deliveryCosts={deliveryCosts}
        />
      </div>
    </div>
  );
}

export default App;
