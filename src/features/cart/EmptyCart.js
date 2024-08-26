import emptyCartImage from "../../images/cart-background.jpg";

function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <img
        className="empty-cart-img"
        src={emptyCartImage}
        alt="empty-cart-background"
      />
      <p className="empty-cart-p">Your cart is Empty</p>
    </div>
  );
}

export default EmptyCart;
