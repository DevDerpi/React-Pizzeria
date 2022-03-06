import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "./Input";
const MealItemForm = (props) => {
  const mealAddHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form}>
      <Input
        label={"Amount "}
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      {/*The double curly braces is one to give input to the input prop , the second is to send it as an object */}
      <button onClick={mealAddHandler}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
