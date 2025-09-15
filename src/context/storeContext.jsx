import { createContext, useContext } from "react";
import { plantsData } from "../features/store/plantsData";
import { useReducer } from "react";
const StoreContext = createContext();

const initialState = plantsData;

function reducer(state, action) {
  switch (action.type) {
    case "sort":
      if (action.payload.value === "name")
        return state.slice().sort((a, b) => a.name.localeCompare(b.name));
      else if (action.payload.value === "htl")
        return state.slice().sort((a, b) => b.price - a.price);
      else if (action.payload.value === "lth")
        return state.slice().sort((a, b) => a.price - b.price);
      break;
    case "search":
      return initialState.filter((plant) =>
        plant.name.toLowerCase().includes(action.payload.query.toLowerCase())
      );
    default:
      console.log("something went wrong");
      return state;
  }
}

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState); // for Sorting & Search

  function handleSearch(query) {
    dispatch({ type: "search", payload: { query } });
  }

  function handleSort(value) {
    console.log(value);

    dispatch({ type: "sort", payload: { value } });
  }

  const value = {
    state,
    handleSearch,
    handleSort,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const value = useContext(StoreContext);

  if (value === undefined)
    throw Error("Use the value of the context inside it's provider please");

  return value;
}
