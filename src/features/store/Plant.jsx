import "./Plant.css";
import { useCart } from "../../context/cartContext";
import Counter from "../../ui/Counter";

export default function Plant({ data }) {
  const { state, addToCart, removeFromCart } = useCart();

  const { id, name, image, description, price } = data;
  const cartItem = state.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 1;

  return (
    <div className="plant">
      <img className="plant__img" src={image} alt={name} />
      <div className="plant__content">
        <h3 className="plant__name">{name}</h3>
        <div className="plant__price-box">
          <p>{`$${count * price}`}</p>
          {cartItem && <Counter id={id} />}
        </div>
        <p className="plant__description">{description}</p>

        <div style={{ marginTop: "auto" }}>
          {cartItem ? (
            <button
              className="plant__btn--delete plant__btn"
              onClick={() => removeFromCart(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="plant__btn--add plant__btn"
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
