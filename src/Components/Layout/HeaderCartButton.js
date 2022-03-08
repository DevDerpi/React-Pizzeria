import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(cartContext);
  const { meals } = ctx;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (meals.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [meals]);
  const totalMeals = ctx.meals.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const cartClickHandler = (event) => {
    event.preventDefault();
    props.clicked();
  };
  return (
    <form>
      <button className={btnClasses} onClick={cartClickHandler}>
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
