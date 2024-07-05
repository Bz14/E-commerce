import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h2 className="new-h2">Get Exclusive Offer On Your Email</h2>
      <h3 className="new-h3">Subscribe to our news letter and stay updated </h3>
      <div className="input-div">
        <input
          type="text"
          placeholder="Your Email"
          className="new-input"
        ></input>
        <button className="news-btn">Subscribe</button>
      </div>
    </div>
  );
}
