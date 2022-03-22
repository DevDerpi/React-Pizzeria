import React from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <div>
      <MealsSummary />
      <AvaliableMeals />
    </div>
  );
};
export default Meals;
