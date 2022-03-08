import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartState, setCartState] = useState(false);
  const cartClickedHandler = () => {
    setCartState(true);
  };
  const closeBtnHanlder = () => {
    setCartState(false);
  };
  return (
    <CartProvider>
      <Header clicked={cartClickedHandler} />
      <main>
        <Meals />
      </main>
      {cartState && <Cart close={closeBtnHanlder} />}
    </CartProvider>
  );
}

export default App;
