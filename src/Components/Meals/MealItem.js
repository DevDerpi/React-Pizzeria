import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const mealName = props.pizzaName;
  const mealID = props.id;
  const mealPrice = `${props.pizzaPrice.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const addMealHandler = (mealAmount) => {
    const newMeal = {
      amount: +mealAmount,
      id: mealID,
      price: mealPrice,
      name: mealName,
    };
    ctx.addNewMeal(newMeal);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{mealName}</h3>
        <div className={styles.description}>{props.pizzaDesc}</div>
        <div className={styles.price}>{`LE` + mealPrice}</div>
      </div>
      <div>
        <MealItemForm id={mealID} onAdd={addMealHandler} />
      </div>
    </li>
  );
};
export default MealItem;
