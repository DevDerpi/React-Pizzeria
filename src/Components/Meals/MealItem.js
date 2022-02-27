import React from "react";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <li className={styles.meal} >
      <h3>{props.pizzaName}</h3>
      <span className={styles.description}>{props.pizzaDesc}</span>
      <span className={styles.price}>LE {props.pizzaPrice}</span>
    </li>
  );
};
export default MealItem;
