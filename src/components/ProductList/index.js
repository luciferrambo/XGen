import React from "react";
import ProductCard from "./ProductCard";
import "./style.scss";

const ProductList = ({ currentIndex }) => {
  const indexList = [
    currentIndex,
    currentIndex + 1,
    currentIndex + 2,
    currentIndex + 3,
  ];
  return (
    <div className="product-list">
      {indexList.map((item, index) => <ProductCard cardIndex={item} key={index}/>)}
    </div>
  );
};

export { ProductList };
