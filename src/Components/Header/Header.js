import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { cartItems } = props;
  console.log(cartItems);

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-menu nav-left-items">
          <img
            src={require("../../assets/images/icon-menu.svg").default}
            alt="hamburger-menu"
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
          <Link to="/cart">
            <img
              src={require("../../assets/images/icon-cart.svg").default}
              alt="cart-logo"
              className="cart-img"
            />
          </Link>

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
    </nav>
  );
}

export default Header;
