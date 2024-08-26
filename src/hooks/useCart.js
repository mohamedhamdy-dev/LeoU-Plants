import { useState } from "react";

export function useCart() {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [chosen, setChosen] = useState(null);

  function handleChosen(plant) {
    plant.name === chosen?.name ? setChosen(null) : setChosen(plant);
  }

  function handleAddToCart() {
    let flag = 0;
    const totalPrice = count * chosen.price;
    const newItem = {
      name: chosen.name,
      image: chosen.image,
      totalPrice: totalPrice,
      count: count,
    };

    for (var k = 0; k < cartItems.length; k++) {
      if (cartItems[k].name === chosen.name) {
        const updatedItems = cartItems.map((el) =>
          el.name === chosen.name ? newItem : el
        );
        setCartItems(updatedItems);
        flag++;
      }
    }

    if (flag === 0) setCartItems([...cartItems, newItem]);
    setCount(1);
  }

  function handleDecCount() {
    if (count === 1) return;
    setCount((count) => count - 1);
  }

  function handleIncCount() {
    setCount((count) => count + 1);
  }

  function handleRemoveFromCart(itemName) {
    setCartItems(cartItems.filter((plant) => plant.name !== itemName));
  }

  return [
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    count,
    handleDecCount,
    handleIncCount,
    chosen,
    handleChosen,
  ];
}
