import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export default function CartProvider({ children }) {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [chosen, setChosen] = useState(null);

  function handleChosen(plant) {
    const itemFromCart = cartItems.find((item) => item.name === plant.name);

    if (itemFromCart) {
      setCount(itemFromCart.count);
    } else {
      setCount(1);
    }

    plant.name === chosen?.name ? setChosen(null) : setChosen(plant);
  }

  function handleAddToCart() {
    let flag = 0;
    const newItem = {
      price: chosen.price,
      name: chosen.name,
      image: chosen.image,
      count: count,
      totalPrice: count * chosen.price,
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
    setCount(1);
  }

  const value = {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    count,
    setCount,
    handleDecCount,
    handleIncCount,
    chosen,
    handleChosen,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export function useCart() {
  const context = useContext(cartContext);
  if (context === undefined)
    throw new Error("You Are Using The Context Outside The Provider");
  return context;
}
