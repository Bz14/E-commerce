import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./Breadcums.css";

export default function Breadcrum(props) {
  return (
    <div className="breadcrum">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {props.data.category}
      <img src={arrow_icon} alt="" />
      {props.data.name}
    </div>
  );
}
