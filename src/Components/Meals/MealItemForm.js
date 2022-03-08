import React, { useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "./Input";
const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);
  const mealAddHandler = (event) => {
    event.preventDefault();
    props.onAdd(amount);
    //send object with the amount (extracted from Input component) of meals of this pizza
  };
  return (
    <form className={styles.form}>
      <Input
        label={"Amount "}
        input={{
          id: "amount_" + props.id,
          type: "number",
          
          min: "1",
          max: "5",
          
        }}
        onAmountChange={(amount) => {
          setAmount(amount);
        }}
      />
      {/*The double curly braces is one to give input to the input prop , the second is to send it as an object */}
      <button onClick={mealAddHandler}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
