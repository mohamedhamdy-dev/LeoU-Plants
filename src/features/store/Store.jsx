import "./Store.css";
import { Card } from "./Card";
import { useStore } from "../../context/storeContext";
import StateMessage from "../../ui/StateMessage";

export default function Store() {
  const { state } = useStore();

  const noResults = state.length === 0;

  return noResults ? (
    <StateMessage message="No results found , try again 😅" />
  ) : (
    <ul className="products-container">
      {state.map((card) => (
        <Card data={card} key={card.name} />
      ))}
    </ul>
  );
}
