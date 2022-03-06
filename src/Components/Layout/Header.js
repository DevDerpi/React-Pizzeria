import React from "react";
import styles from "./Header.module.css";
import bgImage from "./images/pizza.jpg";

import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const clickHandler = () =>{
    props.clicked();
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Pizzeria</h1>
        <HeaderCartButton clicked = {clickHandler}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={bgImage} alt="Pizza background" />
      </div>
    </React.Fragment>
  );
};
export default Header;
