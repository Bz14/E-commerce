import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <div className="left-product">
        <div className="small-img">
          <img src={props.data.image} alt="" />
          <img src={props.data.image} alt="" />
          <img src={props.data.image} alt="" />
          <img src={props.data.image} alt="" />
        </div>
        <img src={props.data.image} alt="" />
      </div>
      <div className="right-product">
        <h1 className="product-header">{props.data.name}</h1>
        <div>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>(122)</span>
        </div>
        <div className="price">
          <h5>${props.data.old_price}</h5>
          <h5>${props.data.new_price}</h5>
        </div>

        <h5 className="product-p">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeve, worn as an undershirt or outer
          garment.
        </h5>
        <h3 className="select-size">Select Size</h3>
        <ul className="sizes">
          <li className="size-li">S</li>
          <li className="size-li">M</li>
          <li className="size-li">L</li>
          <li className="size-li">XL</li>
          <li className="size-li">XXL</li>
        </ul>
        <button
          className="add-to-cart"
          onClick={() => addToCart(props.data.id)}
        >
          ADD TO CART
        </button>
        <h5 className="tags">Category: Women, T-Shirt, Crop Top</h5>
        <h5 className="tags">Tags: Modern, Latest</h5>
      </div>
    </div>
  );
}
