import { createContext, useEffect, useState } from "react";

// create context
export const CartContext = createContext();

// provider
const CartProvider = ({ children }) => {

  // localStorage data
  const storedCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  // state
  const [cartItem, setcartItem] =
    useState(storedCart);

  // save to localStorage
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItem)
    );

  }, [cartItem]);

  // add to cart
  const addToCart = (product) => {

    const existingProduct = cartItem.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      alert("Product Already Exists");

      return;
    }

    alert("Product Successfully Added");

    setcartItem([
      ...cartItem,
      {
        ...product,
        quantity: 1
      }
    ]);
  };

  // remove
  const removeFromCart = (id) => {

    const updatedCart = cartItem.filter(
      (item) => item.id !== id
    );

    setcartItem(updatedCart);
  };

  // increment
  const incrementQuantity = (id) => {

    const updatedCart = cartItem.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setcartItem(updatedCart);
  };

  // decrement
  const decrementQuantity = (id) => {

    const updatedCart = cartItem.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1
          }
        : item
    );

    setcartItem(updatedCart);
  };

  return (

    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity
      }}
    >

      {children}

    </CartContext.Provider>
  );
};

export default CartProvider;