import React from "react";
import "./DiscriptionBox.css";

export default function DiscriptionBox() {
  return (
    <div className="review-div">
      <div className="review-header">
        <h3 className="review-h3 ">Description</h3>
        <h3 className="review-h3 review">Reviews (122)</h3>
      </div>
      <div className="review-body">
        <p className="paragraph">
          E-commerce, or electronic commerce, is the process of buying and
          selling goods or services over the internet. It encompasses various
          types of transactions, including Business-to-Consumer (B2C),
          Business-to-Business (B2B), and Consumer-to-Consumer (C2C). E-commerce
          platforms like Amazon and eBay allow consumers to shop for a wide
          range of products from the convenience of their homes, offering
          benefits such as 24/7 availability, a broader selection of goods, and
          often lower prices due to reduced overhead costs
        </p>
        <p className="paragraph">
          Despite its advantages, e-commerce also presents several challenges.
          Security is a primary concern, as businesses must protect consumer
          data and ensure secure transactions. Competition is fierce, with
          countless online retailers vying for consumer attention. Efficient
          logistics are crucial for managing inventory, shipping, and returns,
          while building and maintaining customer trust is essential,
          particularly for new and small businesses.
        </p>
      </div>
    </div>
  );
}
