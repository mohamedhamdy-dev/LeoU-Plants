import { React } from "react";
import "./PlantInfo.css";
import { useCart } from "../../context/cartContext";

export function PlantInfo() {
  // export function PlantInfo({
  //   chosen,
  //   onAddToCart,
  //   onDec,
  //   onInc,
  //   currentCount,
  //   cartItems,
  //   onRemoveFromCart,
  // }) {

  const {
    handleRemoveFromCart,
    handleAddToCart,
    count,
    setCount,
    chosen,
    handleIncCount,
    handleDecCount,
    cartItems,
  } = useCart();

  const { name: chosenName, image, description, price } = chosen;
  const isInCart = cartItems.some((item) => item.name === chosenName);

  // const itemFromCart = cartItems.find((item) => item.name === chosenName);
  // let currentQuantity = itemFromCart?.count;
  // let currentQuantity;
  // if (isInCart) {
  //   setCount(currentQuantity);
  // }

  // console.log(count);

  // if (isInCart) {
  //   for (let i = 0; i < cartItems.length; i++) {
  //     if (cartItems[i].name === name) {
  //       currentQuantity = cartItems[i].count;
  //     }
  //   }
  //   setCount(currentQuantity);
  // }

  // let currentQuantity;
  // for (let i = 0; i < cartItems.length; i++) {
  //   if (cartItems[i].name === name) {
  //     currentQuantity = cartItems[i].count;
  //   }
  // }

  return (
    <div className="plant-info">
      <div>
        <img className="plant-info-img" src={image} alt="name" />
      </div>
      <div className="text">
        <h3 className="plant-info-name">{chosenName}</h3>

        <div className="plant-info-price-count">
          <p className="plant-info-price">
            {/* {`$${
            isInCart ? currentQuantity * price : price
          }`}
           */}

            <p className="plant-info-price">{`$${count * price}`}</p>
          </p>

          {isInCart && (
            <p className="count">
              {/* <button
                className="btn-count count-down"
                onClick={() => handleDecCount(itemFromCart)}
              > */}

              <button className="btn-count count-down" onClick={handleDecCount}>
                -
              </button>
              {count}
              <button className="btn-count count-up" onClick={handleIncCount}>
                +
              </button>
            </p>
          )}
        </div>

        <p className="plant-info-description">{description}</p>
      </div>

      <div className="plant-info-cart-btns-container">
        <button
          className="add-btn plant-info-cart-btns"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {isInCart ? (
          <button
            className="delete-btn plant-info-cart-btns"
            onClick={() => handleRemoveFromCart(chosenName)}
          >
            Remove From Cart
          </button>
        ) : null}
      </div>
    </div>
  );
}
