import React, { useState, useEffect } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import useHttp from "../../hooks/use-http";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { sendRequest, hasError, isLoading } = useHttp();

  const processFetchedData = (data) => {
    const fetchedMeals = [];
    for (const key in data) {
      const meal = {
        id: data[key].id,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      };
      fetchedMeals.push(meal);
    }
    setMeals(fetchedMeals);
  };
  useEffect(() => {
    sendRequest(
      {
        method: "GET",
        url: "https://react-pizzeria-fc68d-default-rtdb.firebaseio.com/meals.json",
      },
      processFetchedData
    );
  }, [sendRequest]);

  const mealsList = (
    <ul>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          pizzaName={meal.name}
          pizzaDesc={meal.description}
          pizzaPrice={meal.price}
        />
      ))}
    </ul>
  );
  return (
    <div className={styles.meals}>
      <Card>
        {isLoading ? (
          <p>Loading...</p>
        ) : hasError ? (
          <p>Something Went Wrong!!! </p>
        ) : (
          mealsList
        )}
      </Card>
    </div>
  );
};
export default AvailableMeals;
