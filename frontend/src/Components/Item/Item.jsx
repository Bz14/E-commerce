import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="item-div">
      <Link to={`/product/${props.data.id}`}>
        <img src={props.data.image} alt="" className="item-img" />
      </Link>

      <p className="item-name">{props.data.name}</p>
      <div>
        <span className="item-old-price">${props.data.new_price}</span>
        <span className="item-new-price">${props.data.old_price}</span>
      </div>
    </div>
  );
}
