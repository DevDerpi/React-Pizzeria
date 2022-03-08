import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const orderBtnHandler = (event) => {
    event.preventDefault();
    console.log("Ordering ...");
  };
  const closeBtnHanlder = (event) => {
    event.preventDefault();
    props.close();
  };
  // const DUMMY_CART_ITEMS = [
  //   {
  //     id: "m1",
  //     name: "Margherita Pizza",
  //     price: 22.99,
  //     amount: 2,
  //   },

  //   {
  //     id: "m3",
  //     name: "Meat Pizza",
  //     price: 24.99,
  //     amount: 1,
  //   },
  // ];
  // const priceArr = DUMMY_CART_ITEMS.map((item) => {
  //   return item.price * item.amount;
  // });
  // const total = priceArr.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(total);
  return (
    <Modal onClick={closeBtnHanlder}>
      <ul className={styles["cart-items"]}>
        {ctx.meals.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          );
        })}
      </ul>
      <div className={styles.total}>
        <span>Total Amount </span>
        <span>{"LE" + ctx.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={closeBtnHanlder}>
          Close
        </button>
        <button onClick={orderBtnHandler} className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
