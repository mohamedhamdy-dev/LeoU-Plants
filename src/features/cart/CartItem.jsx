import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../context/cartContext";
import Counter from "../../ui/Counter";

export function CartItem({ item }) {
  const { id, name, image, count, price } = item;
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <p className="cart-item-count">{count}X</p>
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>

      <p className="cart-item-name">{name}</p>
      <p className="cart-item-price">Total Price: {count * price}$</p>

      <div className="cart-control-btns">
        <Counter id={item.id} />
        <button
          className="btn-delete-cart-item"
          onClick={() => removeFromCart(id)}
        >
          <MdOutlineRemoveShoppingCart
            style={{ width: "20px", height: "20px" }}
          />
          Remove
        </button>
      </div>
    </div>
  );
}
