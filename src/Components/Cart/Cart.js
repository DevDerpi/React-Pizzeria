import React, { useContext, Fragment } from "react";
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
  const cartAddItemHandler = (item) => {
    ctx.addNewMeal({ ...item, amount: 1 });
  };
  const cartRemoveItemHandler = (id) => {
    ctx.removeMeal(id);
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
      {ctx.meals.length > 0 ? (
        <Fragment>
          <ul className={styles["cart-items"]}>
            {ctx.meals.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  onAdd={cartAddItemHandler.bind(null, item)}
                  onRemove={cartRemoveItemHandler.bind(null, item.id)}
                />
              );
            })}
          </ul>
          <div className={styles.total}>
            <span>Total Amount </span>
            <span>{"LE" + ctx.totalAmount.toFixed(2)}</span>
          </div>
        </Fragment>
      ) : (
        <span className={styles.total}>Cart is Empty</span>
      )}

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={closeBtnHanlder}>
          Close
        </button>
        {ctx.meals.length > 0 && (
          <button onClick={orderBtnHandler} className={styles.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
