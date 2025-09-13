import "./Cart.css";
import EmptyCart from "./EmptyCart";
import { CartItem } from "./CartItem";
import { plantsData } from "../store/plantsData";
import { useCart } from "../../context/cartContext";

export function Cart() {
  const { state } = useCart();

  const cartData = state.map((item) => {
    const itemData = plantsData.find((plant) => plant.id === item.id);
    return { ...itemData, ...item };
  });

  return (
    <div className="cart">
      {cartData.length > 0 ? (
        <div className="cart-items__container">
          {cartData.map((item) => (
            <CartItem item={item} key={item.name} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
