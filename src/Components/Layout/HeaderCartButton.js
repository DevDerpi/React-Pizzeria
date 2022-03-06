import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
const HeaderCartButton = (props) => {
  let totalMeals = 2;
  const cartClickHandler = (event) => {
    event.preventDefault();
    props.clicked();
  };
  return (
    <form>
      <button className={styles.button} onClick={cartClickHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={styles.badge}>{totalMeals}</span>
      </button>
    </form>
  );
};
export default HeaderCartButton;
