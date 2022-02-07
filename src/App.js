//Lib
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

// CSS
import "./App.css";
import Logo from "./assets/img/Deliveroo_logo.png";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    "En cours de chargement"
  ) : (
    <div className="App">
      <Header Logo={Logo} restaurant={data.restaurant} />

      <Categories categories={data.categories} />
    </div>
  );
}

export default App;
