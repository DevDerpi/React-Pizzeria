import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
const AvailableMeals = (props) => {
  return (
    <Card>
      <div className={styles.meals}></div>
    </Card>
  );
};
export default AvailableMeals;
