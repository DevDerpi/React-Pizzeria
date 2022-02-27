import React from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Margherita Pizza",
      description:
        "Pizza topping including : Basil, fresh mozzarella, and tomatoes.",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Cheese Pizza",
      description:
        "A classic is the statistical favorite. a delicious mixture of cheese ",
      price: 12.5,
    },
    {
      id: "m3",
      name: "Meat Pizza",
      description: "Pile on ground beef and sausage for a hearty meal.",
      price: 16.99,
    },
    {
      id: "m4",
      name: "BBQ Chicken Pizza",
      description:
        "chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.",
      price: 18.99,
    },
  ];
  return (
    <div>
      <MealsSummary />
      <AvaliableMeals meals={DUMMY_MEALS} />
    </div>
  );
};
export default Meals;
