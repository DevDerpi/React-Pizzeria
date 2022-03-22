import React, { useContext, Fragment } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const orderBtnHandler = (event) => {
    event.preventDefault(); //show checkout form
    console.log("Ordering ...");
    props.onOrder();
  };
  const closeBtnHanlder = (event) => {
    event.preventDefault();
    props.onClose();
  };
  const cartAddItemHandler = (item) => {
    ctx.addNewMeal({ ...item, amount: 1 });
  };
  const cartRemoveItemHandler = (id) => {
    ctx.removeMeal(id);
  };

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
