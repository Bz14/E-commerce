import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DiscriptionBox from "../Components/DiscriptionBox/DiscriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((data) => data.id === Number(productId));
  return (
    <div>
      <BreadCrum data={product} />
      <ProductDisplay data={product} />
      <DiscriptionBox />
      <RelatedProduct />
    </div>
  );
}
