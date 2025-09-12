import { React, useState } from "react";
import { useCart } from "../../context/cartContext";

export function CartItem({ item }) {
  const { image, name, count, totalPrice } = item;
  const [cartItemCount, setCartItemCount] = useState(count);
  const { handleRemoveFromCart, cartItems } = useCart();

  function handleDecCartCount() {
    if (count === 1) return;
    const selectedItem = cartItems.find((item) => item.name === name);
    selectedItem.count--;
    selectedItem.totalPrice = selectedItem.price * selectedItem.count;
    setCartItemCount(selectedItem.count);
  }

  function handleIncCartCount() {
    const selectedItem = cartItems.find((item) => item.name === name);
    selectedItem.count++;
    selectedItem.totalPrice = selectedItem.price * selectedItem.count;
    setCartItemCount(selectedItem.count);
  }

  console.log(cartItems);

  return (
    <div className="cart-item">
      {/* <p className="cart-item-count">{count}X</p> */}
      <p className="cart-item-count">{cartItemCount}X</p>
      <div className="cart-item-image">
        <img src={Object.values(image)} alt="lol" />
      </div>

      <p className="cart-item-name">{name}</p>
      <p className="cart-item-price">Total Price: {totalPrice}$</p>

      <div className=" cart-control-btns">
        <button className="btn-count count-down" onClick={handleDecCartCount}>
          -
        </button>
        <span className="cart-item-counter">{cartItemCount}</span>
        <button className="btn-count count-up" onClick={handleIncCartCount}>
          +
        </button>
        <button
          className="btn-delete-cart-item"
          onClick={() => handleRemoveFromCart(name)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="btn-delete-cart-item-svg"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
