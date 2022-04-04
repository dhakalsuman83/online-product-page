import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import products from "./Data/Data";
// import Cart from "./Components/Cart/Cart";

function App() {
  const [count, setCount] = React.useState(1);
  const [cartItems, setCartItems] = React.useState([]);

  const addition = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const substraction = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleCart = (count, product, img) => {
    if (cartItems && cartItems.length !== 0) {
      const exist = cartItems.find((cartItem) => cartItem.id === product.id);
      if (exist) {
        setCartItems((preCartItems) => {
          return preCartItems.map((preCartItem) => {
            return preCartItem.id === product.id
              ? {
                  ...preCartItem,
                  qty: preCartItem.qty + count,
                }
              : preCartItem;
          });
        });
      } else {
        setCartItems((preCartItem) => [
          ...preCartItem,
          { ...product, qty: count },
        ]);
      }
      setCount(1);
    } else {
      setCartItems([{ ...product, qty: count }]);
      setCount(1);
    }
  };

  const onDelete = (index) => {
    console.log(index);
    setCartItems((prevCartItems) => {
      prevCartItems.splice(index, 1);
    });
  };

  return (
    <div className="container">
      <Header cartItems={cartItems} onDelete={onDelete} />

      {products.map((product, index) => (
        <Main
          key={index}
          product={product}
          addition={addition}
          substraction={substraction}
          count={count}
          handleCart={handleCart}
        />
      ))}
    </div>
  );
}

export default App;
