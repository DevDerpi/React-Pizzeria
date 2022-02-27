import React from "react";
import styles from "./Header.module.css";
import bgImage from "./images/pizza.jpg";
import MealsSummary from "./MealsSummary";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>React Pizzeria</h1>
      </div>
      <div className={styles["main-image"]}>
        <img src={bgImage} />
      </div>
      <MealsSummary />
    </div>
  );
};
export default Header;
