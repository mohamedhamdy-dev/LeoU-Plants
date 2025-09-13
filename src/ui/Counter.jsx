import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../context/cartContext";
import "./Counter.css";

export default function Counter({ id }) {
  const { state: cart, increaseCount, decreaseCount } = useCart();
  const cartItem = cart.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 1;

  return (
    <div className="counter-box">
      <button className="counter-btn" onClick={() => decreaseCount(id)}>
        <FiMinus />
      </button>
      <p className="counter-value">{count}</p>
      <button className="counter-btn" onClick={() => increaseCount(id)}>
        <FiPlus />
      </button>
    </div>
  );
}
