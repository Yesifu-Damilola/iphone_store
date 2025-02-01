/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { products } from "../constants/Products";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const revomeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  
  



  const contextValue = { cartItems, addToCart, revomeFromCart };
  return (
    <Shopcontext.Provider value={{ contextValue }}>
      {children}t
    </Shopcontext.Provider>
  );
};
