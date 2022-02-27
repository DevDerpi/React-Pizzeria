import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const AvailableMeals = (props) => {
  return (
    <Card>
      <div className={styles.meals}>
        <ul>
          {props.meals.map((meal) => (
            <MealItem
              key={meal.id}
              pizzaName={meal.name}
              pizzaDesc={meal.description}
              pizzaPrice={meal.price}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default AvailableMeals;
