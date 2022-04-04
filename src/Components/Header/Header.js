import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [cartShow, setCartShow] = React.useState(false);
  const [hamShow, setHamShow] = React.useState(false);
  const { cartItems } = props;
  // console.log(cartItems);

  const showCart = () => {
    setCartShow(!cartShow);
  };

  const handleHamMenu = () => {
    setHamShow(!hamShow);
  };

  return (
    <nav className="nav">
      {hamShow && (
        <div className="ham-menu">
          <img
            src={require("../../assets/images/icon-close.svg").default}
            alt="cross"
            className="ham-cross"
            onClick={handleHamMenu}
          />
          <ul className="">
            <li className="">
              <a>Collections</a>
            </li>
            <li className="">
              <a>Men</a>
            </li>
            <li className="">
              <a>Women</a>
            </li>
            <li className="">
              <a>About</a>
            </li>
            <li className="">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
      <div className="nav-left">
        <div className="nav-menu nav-left-items">
          <img
            src={require("../../assets/images/icon-menu.svg").default}
            alt="hamburger-menu"
            onClick={handleHamMenu}
          />
        </div>
        <img
          src={require("../../assets/images/logo.svg").default}
          alt="logo"
          className="nav-left-img nav-left-items"
        />
        <ul className="nav-links nav-left-items">
          <li className="nav-link">
            <a>Collections</a>
          </li>
          <li className="nav-link">
            <a>Men</a>
          </li>
          <li className="nav-link">
            <a>Women</a>
          </li>
          <li className="nav-link">
            <a>About</a>
          </li>
          <li className="nav-link">
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-right-item badge-container">
          <img
            src={require("../../assets/images/icon-cart.svg").default}
            alt="cart-logo"
            className="cart-img"
            onMouseDown={showCart}
            // onMouseOut={showCart}
          />

          {cartItems.length !== 0 && (
            <div className="badge">{cartItems.length}</div>
          )}
        </div>

        <img
          src={require("../../assets/images/image-avatar.png")}
          alt="profile-image"
          className="nav-right-item profile-img"
        />
      </div>
      {cartShow && (
        <div className="cart-hover">
          <h3>Cart</h3>
          <div className="divider"></div>

          {cartItems.length != 0 ? (
            cartItems.map((cartItem, index) => (
              <div className="cart-details" key={index}>
                <div className="cart-details-top">
                  <div className="cart-details-top-image">
                    <img
                      src={require("../../assets/images/image-product-1-thumbnail.jpg")}
                      alt="image"
                    />
                  </div>

                  <div className="cart-details-top-details">
                    <p className="cart-details-top-details-title">
                      {cartItem.mainTitle}
                    </p>
                    <p>
                      <span>
                        ${cartItem.retailPrice.toFixed(2)} * {cartItem.qty}
                      </span>
                      <span>
                        ${(cartItem.retailPrice * cartItem.qty).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Cart is empty</div>
          )}
          <button className="btn-checkout">Checkout</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
