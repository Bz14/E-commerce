import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";

export default function CartItems() {
  const { getTotalAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-div">
      <div className="cart-header">
        <h4 className="cart-h4">Products</h4>
        <h4 className="cart-h4">Title</h4>
        <h4 className="cart-h4">Price</h4>
        <h4 className="cart-h4">Quantity</h4>
        <h4 className="cart-h4">Total</h4>
        <h4 className="cart-h4">Remove</h4>
      </div>
      <hr className="cart-hr" />
      <div className="cart-items">
        {all_product.map((product, idx) => {
          if (cartItem[product.id] > 0) {
            return (
              <>
                <div className="cart-item" key={idx}>
                  <img src={product.image} alt="" className="cart-img" />
                  <h5 className="cart-h3">{product.name}</h5>
                  <h5 className="cart-h3">${product.new_price}</h5>
                  <h5 className="cart-h3">{cartItem[product.id]}</h5>
                  <h5 className="cart-h3">
                    ${cartItem[product.id] * product.new_price}
                  </h5>
                  <img
                    src={remove_icon}
                    alt=""
                    className="remove-icon"
                    onClick={() => removeFromCart(product.id)}
                  ></img>
                </div>
                <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <h3 className="h3-total">Cart Totals</h3>
      <div className="cart-payment">
        <div className="cart-total">
          <div className="subtotal">
            <h5 className="cart-price">Subtotal</h5>
            <h5 className="cart-price">${getTotalAmount()}</h5>
          </div>
          <hr className="pay-hr" />
          <div className="fee">
            <h5 className="cart-price">Shipping Fee</h5>
            <h5 className="cart-price">${0}</h5>
          </div>
          <hr className="pay-hr" />
          <div className="total">
            <h3>Total </h3>
            <h3 className="cart-price">${getTotalAmount()}</h3>
          </div>
          <hr className="pay-hr" />
          <div className="check-out">
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-free">
          <h5 className="promo-txt">If you have a promo code, Enter it here</h5>
          <div className="promo-code">
            <input type="text" placeholder="promo code" />
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
