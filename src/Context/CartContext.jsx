
import React, { createContext, useReducer, useContext, useEffect } from 'react';


const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || []
};


const cartReducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
      case 'ADD_ITEM':
          const existingItemIndex = state.items.findIndex(
              item => item.id === action.payload.id && item.size === action.payload.size
          );

          if (existingItemIndex >= 0) {
              updatedItems = [...state.items];
              updatedItems[existingItemIndex].quantity += action.payload.quantity;
              return { ...state, items: updatedItems };
          } else {
              return { ...state, items: [...state.items, action.payload] };
          }
      case 'REMOVE_ITEM':
          updatedItems = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
          return { ...state, items: updatedItems };
      case 'UPDATE_ITEM_QUANTITY':
          const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
          if (itemIndex >= 0) {
              updatedItems = [...state.items];
              updatedItems[itemIndex].quantity = action.payload.quantity;
              return { ...state, items: updatedItems };
          }
          return state;
      case 'CLEAR_CART':
          return { items: [] };
      default:
          return state;
  }
};


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  return (
      <CartContext.Provider value={{ state, dispatch }}>
          {children}
      </CartContext.Provider>
  );
};

