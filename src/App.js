import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartState, setCartState] = useState(false);
  const cartClickedHandler = () => {
    setCartState(true);
  };
  const closeBtnHanlder = () =>{
    setCartState(false);
  }
  return (
    <React.Fragment>
      <Header clicked={cartClickedHandler} />
      <main>
        <Meals />
      </main>
      {cartState && <Cart close={closeBtnHanlder}/>}
    </React.Fragment>
  );
}

export default App;
