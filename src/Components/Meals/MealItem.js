import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `LE ${props.pizzaPrice.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.pizzaName}</h3>
        <div className={styles.description}>{props.pizzaDesc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
export default MealItem;
