import "./PlantInfo.css";
import { useCart } from "../../context/cartContext";
import Counter from "../../ui/Counter";

export function PlantInfo({ data }) {
  const { state, addToCart, removeFromCart } = useCart();

  const { id, name, image, description, price } = data;
  const cartItem = state.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 1;

  return (
    <div className="plant-info">
      <img className="plant-info-img" src={image} alt="name" />
      <div className="plant-info-content">
        <h3 className="plant-info-name">{name}</h3>
        <div className="plant-info-price-box">
          <p className="plant-info-price">{`$${count * price}`}</p>
          {cartItem && <Counter id={id} />}
        </div>
        <p className="plant-info-description">{description}</p>

        <div style={{ marginTop: "auto" }}>
          {cartItem ? (
            <button
              className="delete-btn plant-info-cart-btns"
              onClick={() => removeFromCart(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="add-btn plant-info-cart-btns"
              onClick={() => addToCart(id, count)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
