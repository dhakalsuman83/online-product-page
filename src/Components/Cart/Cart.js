import React from "react";

function Cart(props) {
  const { cartItems } = props;
  return (
    <div className="cart">{cartItems.map((cartItem) => cartItem.qty)}</div>
  );
}

export default Cart;
