import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getCartTotal } = useContext(ShopContext);
  const styleLink = {
    textDecoration: "none",
  };
  return (
    <div className="navbar">
      <div>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>E-shop</p>
        </div>
      </div>
      <ul className="nav-menu">
        <li className="nav-active" onClick={() => setMenu("shop")}>
          <Link to="/" style={styleLink}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" style={styleLink}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={styleLink}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={styleLink}>
            Kids{" "}
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login" style={styleLink}>
            Login
          </Link>
        </button>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getCartTotal()}</div>
      </div>
    </div>
  );
};
