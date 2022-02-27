import React from "react";
import styles from "./Header.module.css";
import bgImage from "./images/pizza.jpg";
import MealsSummary from "./MealsSummary";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Pizzeria</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={bgImage} alt="Pizza background" />
      </div>
      <MealsSummary />
    </React.Fragment>
  );
};
export default Header;
