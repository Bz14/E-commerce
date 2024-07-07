import React from "react";
import all_data from "../Assets/data";
import Item from "../Item/Item";
import "./RelatedProducts.css";

export default function RelatedProduct() {
  return (
    <div>
      <h2 className="related-header">Related Products</h2>
      <hr className="hr" />
      <div className="related-div">
        {all_data.map((data, idx) => {
          return <Item data={data} />;
        })}
      </div>
    </div>
  );
}
