import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  meals: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const indexOfExistingMeal = state.meals.findIndex((item) => {
      return item.id === action.meal.id;
    });
    let updatedMeals;
    const existingMeal = state.meals[indexOfExistingMeal];
    if (existingMeal) {
      const updatedMeal = {
        ...existingMeal,
        amount: existingMeal.amount + action.meal.amount,
      };
      updatedMeals = [...state.meals];
      updatedMeals[indexOfExistingMeal] = updatedMeal;
    } else {
      updatedMeals = state.meals.concat(action.meal);
    }

    const updatedTotalAmount =
      state.totalAmount + action.meal.price * action.meal.amount;

    return {
      meals: updatedMeals,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_CART_ITEM") {
    const indexOfExistingMeal = state.meals.findIndex((item) => {
      return item.id === action.id;
    });
    const existingMeal = state.meals[indexOfExistingMeal];
    const updatedTotalAmount = state.totalAmount - existingMeal.price;
    let updatedMeals;
    if (existingMeal.amount > 1) {
      const updatedMeal = {
        ...existingMeal,
        amount: existingMeal.amount - 1,
      };
      updatedMeals = [...state.meals];
      updatedMeals[indexOfExistingMeal] = updatedMeal;
    } else {
      //   updatedMeals = [...state.meals];
      //   updatedMeals.splice(indexOfExistingMeal, 1);
      updatedMeals = state.meals.filter((item) => item.id !== action.id);
    }

    return {
      meals: updatedMeals,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  //   const [meals, setMeals] = useState([]);
  const [cartMeals, cartMealsDispatch] = useReducer(
    cartReducer,
    defaultCartState
  );
  //   const [totalAmount, setTotalAmount] = useState(0);
  const addMealHandler = (newMeal) => {
    cartMealsDispatch({
      type: "ADD_CART_ITEM",
      meal: newMeal,
    });
    // setMeals((prevMeals) => {
    //   return [meal, ...prevMeals];
    // });
  };
  //   useEffect(() => {
  //     const priceArr = cartMeals.meals.map((item) => {
  //       return item.price * item.amount;
  //     });
  //     setTotalAmount(
  //       priceArr.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)
  //     );
  //     console.log(cartMeals);
  //   }, [cartMeals.meals]);
  const removeMealHandler = (id) => {
    cartMealsDispatch({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };
  const cartContext = {
    meals: cartMeals.meals,
    totalAmount: cartMeals.totalAmount,
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
