import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItem);
  };

  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        total += itemInfo.new_price * cartItem[item];
      }
    }
    return total;
  };
  const getCartTotal = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item];
      }
    }
    return total;
  };

  const contextValue = {
    getTotalAmount,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getCartTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
