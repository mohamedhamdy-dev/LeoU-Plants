import { React } from "react";
import { useCart } from "../../context/cartContext";

export function Card({ data }) {
  const { name, image, price } = data;
  const { handleChosen } = useCart();

  return (
    <div className="product-item" onClick={() => handleChosen(data)}>
      <div className="product-item-image">
        <img
          className="product-item-img"
          src={Object.values(image)}
          alt={name}
        />
      </div>
      <div className="text">
        <h2 className="product-item-name">{name}</h2>
        <p className="product-item-price">{`$${price}`}</p>
      </div>
    </div>
  );
}
