import React, { useContext , } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(cartContext);

  let totalMeals = ctx.meals.length;
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
