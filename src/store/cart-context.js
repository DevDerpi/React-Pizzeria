import React from "react";

const CartContext = React.createContext({
  meals: [],
  totalAmount: 0,
  addNewMeal: (meal) => {},
  removeMeal: (id) => {},
});
export default CartContext;
