import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>
        {props.label}
        <input
          {...props.input} // to make it pretty much configurable
        />
      </label>
    </div>
  );
};
export default Input;
