import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="offer-div">
      <div className="offer-left">
        <h2 className="offer-header">
          Exclusive <br />
          Offers For You
        </h2>
        <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
        <button className="offer-btn">Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
}
