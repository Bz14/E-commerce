import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartTotal } = useContext(ShopContext);
  const styleLink = {
    textDecoration: "none",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>E-shop</p>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li
          className={menu === "shop" ? "nav-active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to="/" style={styleLink}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          className={menu === "women" ? "nav-active" : ""}
          onClick={() => setMenu("women")}
        >
          <Link to="/women" style={styleLink}>
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
        <li
          className={menu === "men" ? "nav-active" : ""}
          onClick={() => setMenu("men")}
        >
          <Link to="/men" style={styleLink}>
            Men
          </Link>
          {menu === "men" && <hr />}
        </li>
        <li
          className={menu === "kids" ? "nav-active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids" style={styleLink}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
        <li>
          <button className="nav-btn">
            <Link to="/login" style={styleLink}>
              Login
            </Link>
          </button>
        </li>
        <li>
          <Link to="/cart">
            <div style={{ position: "relative" }}>
              <img src={cart_icon} alt="Cart" />
              <div className="nav-cart-count">{getCartTotal()}</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
