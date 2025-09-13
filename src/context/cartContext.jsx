import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();
const initialState = [];

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

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //TODO  ->  Use local storage
  function addToCart(id, count) {
    dispatch({ type: "add", payload: { id, count } });
  }

  function removeFromCart(id) {
    dispatch({ type: "remove", payload: { id } });
  }

  function increaseCount(id) {
    dispatch({ type: "incCount", payload: { id } });
  }

  function decreaseCount(id) {
    const count = state.find((item) => item.id === id).count;
    if (count === 1) return;

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
