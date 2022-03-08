import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(cartContext);

  const totalMeals = ctx.meals.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
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
