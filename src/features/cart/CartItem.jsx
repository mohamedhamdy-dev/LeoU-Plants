import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../context/cartContext";
import Counter from "../../ui/Counter";
import { motion } from "motion/react";

export function CartItem({ item }) {
  const { id, name, image, count, price } = item;
  const { removeFromCart } = useCart();

  return (
    <motion.li layout className="cart__item">
      <div className="cart__item__img-box">
        <p className="cart__item-count">{count}X</p>
        <img src={image} alt={name} className="cart__item-img" />
      </div>

      <p className="cart__item-name">{name}</p>
      <p className="cart__item-price">Total Price: {count * price}$</p>

      <div className="cart__item-control">
        <Counter id={item.id} />
        <button className="cart__delete-btn" onClick={() => removeFromCart(id)}>
          <MdOutlineRemoveShoppingCart
            style={{ width: "20px", height: "20px" }}
          />
          Remove
        </button>
      </div>
    </motion.li>
  );
}
