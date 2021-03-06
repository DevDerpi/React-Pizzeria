import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsInvalid = validate(enteredValue);
  const inputIsInvalid = valueIsInvalid && isTouched;
  const inputChangeHandler = (event) => {
    setIsTouched(true);
    setEnteredValue(event.target.value);
  };
  const blurChangeHandler = () => {
    setIsTouched(true);
  };
  const clearFn = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    inputIsInvalid,
    inputChangeHandler,
    blurChangeHandler,
    clearFn,
  };
};
export default useInput;
