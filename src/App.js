import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Cart/Checkout";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartState, setCartState] = useState(false);
  const [checkoutState, setCheckoutState] = useState(false);
  const cartClickedHandler = () => {
    setCartState(true);
  };
  const closeBtnHanlder = () => {
    setCartState(false);
    setCheckoutState(false);
  };
  const orderClickHandler = () => {
    setCartState(false);
    setCheckoutState(true);
  };
  const backToCartHandler = () => {
    setCheckoutState(false);
    setCartState(true);
  };
  return (
    <CartProvider>
      <Header clicked={cartClickedHandler} />
      <main>
        <Meals />
      </main>
      {checkoutState && (
        <Checkout onClose={closeBtnHanlder} onBackToCart={backToCartHandler} />
      )}
      {cartState && (
        <Cart onClose={closeBtnHanlder} onOrder={orderClickHandler} />
      )}
    </CartProvider>
  );
}

export default App;
