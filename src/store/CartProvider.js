import React from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addMealHandler = (meal) => {};
  const removeMealHandler = (id) => {};
  const cartContext = {
    meals: [],
    totalAmount: 0,
    addNewMeal: addMealHandler,
    removeMeal: removeMealHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
