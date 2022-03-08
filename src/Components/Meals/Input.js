import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, amountRef) => {
  // const [amount, setAmount] = useState(1);
  // const amountChangeHandler = () => {
  //   console.log(amountRef.current.value);
  //   setAmount(amountRef.current.value);
  // };
  // useEffect(() => {
  //   props.onAmountChange(amount);
  // }, [amount, props]);
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>
        {props.label}
        <input
          {...props.input} // to make it pretty much configurable
          ref={amountRef}
        />
      </label>
    </div>
  );
});
export default Input;
