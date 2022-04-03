import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import products from "./Data/Data";

function App() {
  const [count, setCount] = React.useState(1);

  const addition = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const substraction = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <Header />
      {products.map((product, index) => (
        <Main
          key={index}
          product={product}
          addition={addition}
          substraction={substraction}
          count={count}
        />
      ))}
    </div>
  );
}

export default App;
