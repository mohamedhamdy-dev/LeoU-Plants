import { React, useState, useReducer } from "react";
import "./Store.css";
import "./MediaQueries.css";
import { Cart } from "../cart/Cart.js";
import { Tools, Search, Sort } from "./Tools.js";
import { plantsData } from "./plantsData.js";
import { PlantInfo } from "./PlantInfo.js";
import CartButton from "../cart/CartButton.js";
import { useCart } from "../../context/cartContext";
import { Card } from "./Card.js";

const initialState = plantsData;

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return state.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "htl":
      return state.slice().sort((a, b) => b.price - a.price);
    case "lth":
      return state.slice().sort((a, b) => a.price - b.price);
    case "search":
      return action.payload;
    case "cleanUp":
      return initialState;
    default:
      console.log("something went wrong");
  }
}

export default function Store() {
  const [state, dispatch] = useReducer(reducer, initialState); // for Sorting & Search
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { chosen } = useCart();

  function handleIsCartOpen() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <Tools>
        <Search onSearch={dispatch} data={initialState} />
        <Sort onSort={dispatch} />
        <CartButton onCartOpen={handleIsCartOpen} />
      </Tools>

      {isCartOpen ? (
        <Cart />
      ) : (
        <div className="store store-container">
          <div className="products-container">
            {state.map((card) => (
              <Card data={card} key={card.name} />
            ))}
          </div>

          {chosen ? <PlantInfo /> : null}
        </div>
      )}
    </>
  );
}
