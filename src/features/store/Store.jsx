import { useState, useReducer } from "react";
import "./Store.css";
import { Cart } from "../cart/Cart";
import ToolsBar from "./ToolsBar";
import { plantsData } from "./plantsData";
import { Card } from "./Card";
import { IoCartOutline } from "react-icons/io5";
import Search from "./Search";
import Sort from "./Sort";

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
      return state;
  }
}

export default function Store() {
  const [state, dispatch] = useReducer(reducer, initialState); // for Sorting & Search
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleToggleCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <ToolsBar>
        <Search onSearch={dispatch} data={initialState} />
        <Sort onSort={dispatch} />
        <IoCartOutline className="tools-cart-btn" onClick={handleToggleCart} />
      </ToolsBar>

      {isCartOpen ? (
        <Cart />
      ) : (
        <div className="store-container">
          <ul className="products-container">
            {state.map((card) => (
              <Card data={card} key={card.name} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
