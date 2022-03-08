import React, { useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "./Input";
const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  // const [amount, setAmount] = useState(0);
  const mealAddHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    props.onAdd(enteredAmount);
    //send object with the amount (extracted from Input component) of meals of this pizza
  };
  return (
    <form className={styles.form} onSubmit={mealAddHandler}>
      <Input
        label={"Amount "}
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: 1,
          min: "1",
          max: "5",
        }}
        // onAmountChange={(amount) => {
        //   setAmount(amount);
        // }}
        ref={inputAmountRef}
      />
      {/*The double curly braces is one to give input to the input prop , the second is to send it as an object */}
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
