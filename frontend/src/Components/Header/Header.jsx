import React from "react";
import "./Header.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h2 className="h2">NEW ARRIVALS ONLY</h2>

        <div className="hand-icon">
          <p>
            new <img src={hand_icon} alt="" className="hand_icon" />
          </p>
          <p>collections</p>
          <p>for everyone</p>
          <button className="header-btn">
            Latest Collections
            <img src={arrow_icon} alt="" className="left-icon" />
          </button>
        </div>
      </div>
      <div className="header-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}
