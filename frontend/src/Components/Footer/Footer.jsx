import React from "react";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import footer_logo from "../Assets/logo_big.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <h2>E-SHOP</h2>
      </div>
      <div className="footer-content">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-icon">
        <ul className="icon">
          <li>
            <img src={instagram_icon} alt="" />
          </li>
          <li>
            <img src={whatsapp_icon} alt="" />
          </li>
          <li>
            <img src={pintrest_icon} alt="" />
          </li>
        </ul>
      </div>
      <div className="footer-end">
        <hr />
        <h3>Copyright @ 2023 All Rights Reserved</h3>
      </div>
    </div>
  );
}
