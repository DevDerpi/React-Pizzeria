import React from "react";
import useInput from "../../hooks/use-input";
import styles from "./Checkout.module.css";
import Modal from "../UI/Modal";

const Checkout = (props) => {
  const submissionHandler = (event) => {
    event.preventDefault();
  };
  const closeBtnHanlder = (event) => {
    event.preventDefault();
    props.onClose();
  };
  return (
    <Modal onClick={closeBtnHanlder}>
      <form onSubmit={submissionHandler}>
        <div className={styles["control-group"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="mobile">Mobile Phone</label>
            <input id="mobile" type="text" />
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={closeBtnHanlder}>
            Close
          </button>
          <button className={styles.button}>Checkout</button>
        </div>
      </form>
    </Modal>
  );
};
export default Checkout;
