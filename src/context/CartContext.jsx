/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */

import { createContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload }] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.reduce((acc, item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              acc.push({ ...item, quantity: item.quantity - 1 });
            }
          } else {
            acc.push(item);
          }
          return acc;
        }, []),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_CART":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const savedCart = localStorage.getItem("cart");
  const initialState = savedCart ? JSON.parse(savedCart) : { items: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (state) {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

import PropTypes from "prop-types";

// Removed unused PropTypes import

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
