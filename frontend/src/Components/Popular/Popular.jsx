import React from "react";
import "./popular.css";
import Item from "../Item/Item";
import data_product from "../Assets/data.js";

export default function Popular() {
  return (
    <div className="popular-div">
      <h2 className="popular-title">
        POPULAR IN WOMEN
        <hr className="popular-line" />
      </h2>
      <div className="popular-item">
        {data_product.map((item, idx) => {
          return <Item data={item} key={idx} />;
        })}
      </div>
    </div>
  );
}
