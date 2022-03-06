import React from "react";
import styles from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <h2>{props.name}</h2>
      <div className={styles.summary}>
        <span className={styles.price}>{props.price}</span>
        <span className={styles.amount}>{"x"+props.amount}</span>
      </div>

      <div className={styles.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};
export default CartItem;
