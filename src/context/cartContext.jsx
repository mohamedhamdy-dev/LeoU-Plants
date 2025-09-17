import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

function init() {
  const stored = localStorage.getItem("LeouPlantsCart");
  const parsed = JSON.parse(stored || "[]");
  return parsed;
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "incCount":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
      );

    case "decCount":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count - 1 }
          : item
      );

    case "remove":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

function updateCartStorage(callback) {
  const stored = localStorage.getItem("LeouPlantsCart");
  const parsed = JSON.parse(stored || "[]");
  const updatedItems = callback(parsed);
  localStorage.setItem("LeouPlantsCart", JSON.stringify(updatedItems));
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [], init);

  function addToCart(id, count) {
    const newItem = { id, count };

    updateCartStorage((parsed) => [...parsed, newItem]);
    dispatch({ type: "add", payload: newItem });
  }

  function removeFromCart(id) {
    updateCartStorage((parsed) => parsed.filter((item) => item.id !== id));
    dispatch({ type: "remove", payload: { id } });
  }

  function increaseCount(id) {
    const count = state.find((item) => item.id === id).count;
    if (count === 100) return;

    updateCartStorage((parsed) =>
      parsed.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    dispatch({ type: "incCount", payload: { id } });
  }

  function decreaseCount(id) {
    const count = state.find((item) => item.id === id).count;
    if (count === 1) return;

    updateCartStorage((parsed) =>
      parsed.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
    dispatch({ type: "decCount", payload: { id } });
  }

  const value = {
    state,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export function useCart() {
  const context = useContext(cartContext);
  if (context === undefined)
    throw new Error("You Are Using The Context Outside The Provider");
  return context;
}
