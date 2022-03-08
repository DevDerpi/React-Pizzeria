import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const addMealHandler = (meal) => {

    setMeals((prevMeals) => {
      return [meal, ...prevMeals];
    });
  };
  useEffect(() => {
    const priceArr = meals.map((item) => {
      return item.price * item.amount;
    });
    setTotalAmount(priceArr.reduce((partialSum, a) => partialSum + a, 0).toFixed(2));
    console.log(meals);
  }, [meals]);
  const removeMealHandler = (id) => {};
  const cartContext = {
    meals: meals,
    totalAmount: totalAmount,
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
