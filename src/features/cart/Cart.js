import { React } from "react";
import "./Cart.css";
import "./MediaQueries.css";
import EmptyCart from "./EmptyCart";
import { CartItem } from "./CartItem";
import { useCart } from "../../context/cartContext";

export function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <div className="cart-items__container">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.name} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
