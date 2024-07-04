import React from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="item-div">
      <img src={props.data.image} alt="" className="item-img" />
      <p className="item-name">{props.data.name}</p>
      <div>
        <span className="item-old-price">{props.data.new_price}</span>
        <span className="item-new-price">{props.data.old_price}</span>
      </div>
    </div>
  );
}
