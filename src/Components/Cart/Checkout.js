import React, { useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./Checkout.module.css";
import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
const Checkout = (props) => {
  const ctx = useContext(CartContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    enteredValue: nameValue,
    inputIsInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    clearFn: nameClearFn,
  } = useInput((value) => value.trim() === "");
  const {
    enteredValue: addressValue,
    inputIsInvalid: addressIsInvalid,
    inputChangeHandler: addressChangeHandler,
    blurChangeHandler: addressBlurHandler,
    clearFn: addressClearFn,
  } = useInput((value) => value.trim() === "");
  const {
    enteredValue: phoneValue,
    inputIsInvalid: phoneIsInvalid,
    inputChangeHandler: phoneChangeHandler,
    blurChangeHandler: phoneBlurHandler,
    clearFn: phoneClearFn,
  } = useInput((value) => value.trim().length < 11);
  const reset = () => {
    nameClearFn();
    addressClearFn();
    phoneClearFn();
    ctx.resetCart();
  };
  const formisInvalid =
    nameValue.trim() === "" ||
    addressValue.trim() === "" ||
    phoneValue.trim().length < 11;
  const { sendRequest, hasError, isLoading } = useHttp();
  const submissionHandler = (event) => {
    event.preventDefault();
    if (formisInvalid) {
      return;
    }
    console.log("Submitted");
    console.log(
      "Name " + nameValue + "Phone " + phoneValue + "Address " + addressValue
    );
    const meals = ctx.meals;
    const mealsSummary = [];
    for (const key in meals) {
      console.log(meals[key].amount + meals[key].name);
      const pizzaType = meals[key].name;
      const pizzaAmount = meals[key].amount;
      const meal = {
        pizzaType,
        pizzaAmount,
      };
      mealsSummary.push(meal);
    }
    const order = {
      clientName: nameValue,
      clientAddress: addressValue,
      clientPhoneNumber: phoneValue,
      mealsSummary,
    };
    setIsSubmitted(true);
    sendRequest(
      {
        url: "https://react-pizzeria-fc68d-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        data: order,
      },
      reset
    );
  };
  const closeBtnHanlder = (event) => {
    event.preventDefault();
    props.onClose();
  };
  const wheelHandler = (event) => {
    event.target.blur();
  };
  const backBtnHanlder = (event) => {
    event.preventDefault();
    props.onBackToCart();
  };
  if (isLoading) {
    return (
      <Modal onClick={closeBtnHanlder}>
        <h2>Loading...</h2>
      </Modal>
    );
  }
  if (hasError) {
    return (
      <Modal onClick={closeBtnHanlder}>
        <h2>Something Went Wrong</h2>
      </Modal>
    );
  }
  if (isSubmitted) {
    return (
      <Modal onClick={closeBtnHanlder}>
        <h2>Submitted Successfully, Your order is being processed</h2>
      </Modal>
    );
  }
  return (
    <Modal onClick={closeBtnHanlder}>
      <form onSubmit={submissionHandler}>
        <div className={styles["control-group"]}>
          <div
            className={
              nameIsInvalid
                ? `${styles.invalid} ${styles["form-control"]}`
                : styles["form-control"]
            }
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameIsInvalid && (
              <p className={styles["error-text"]}>name field can't be empty</p>
            )}
          </div>

          <div
            className={
              addressIsInvalid
                ? `${styles["form-control"]} ${styles.invalid}`
                : styles["form-control"]
            }
          >
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={addressValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressIsInvalid && (
              <p className={styles["error-text"]}>
                address field can't be empty
              </p>
            )}
          </div>
          <div
            className={
              phoneIsInvalid
                ? `${styles["form-control"]} ${styles.invalid}`
                : styles["form-control"]
            }
          >
            <label htmlFor="mobile">Mobile Phone</label>
            <input
              id="mobile"
              type="number"
              value={phoneValue}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              onWheel={wheelHandler}
            />
            {phoneIsInvalid && (
              <p className={styles["error-text"]}>
                please enter a valid mobile number
              </p>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--back"]} onClick={backBtnHanlder}>
            Back
          </button>
          <button className={styles["button--alt"]} onClick={closeBtnHanlder}>
            Close
          </button>
          <button
            className={styles.button}
            disabled={formisInvalid}
            type="submit"
          >
            Checkout
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default Checkout;
