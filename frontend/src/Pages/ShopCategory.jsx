import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import "./Css/shopCategory.css";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="all-products">
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="category-div">
        <h3 className="category-h3">
          <b>Showing 1-12 </b>out of 36 products
        </h3>
        <button className="category-btn">
          Sort by
          <img src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="show-category">
        {all_product
          .filter((data) => data.category === props.category)
          .map((data, idx) => {
            return <Item data={data} key={idx} />;
          })}
      </div>
      <div className="show-more">
        <button className="show-more-btn">Explore More</button>
      </div>
    </div>
  );
}
