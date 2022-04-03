import React from "react";

function Header() {
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
        <img
          src={require("../../assets/images/icon-cart.svg").default}
          alt="cart-logo"
          className="nav-right-item cart-img"
        />
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
