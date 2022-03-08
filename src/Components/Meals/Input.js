import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const amountRef = useRef();
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = () => {
    console.log(amountRef.current.value);
    setAmount(amountRef.current.value);
  };
  useEffect(() => {
    props.onAmountChange(amount);
  }, [amount,props]);
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>
        {props.label}
        <input
          {...props.input} // to make it pretty much configurable
          ref={amountRef}
          onChange={amountChangeHandler}
          value={amount}
        />
      </label>
    </div>
  );
};
export default Input;
