import React from "react";
import "./style.scss";

export default ({ cardIndex }) => {
  return (
    <div className="product-card">
      <img
        className="img-container"
        src={`https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_${cardIndex}.jpg`}
      ></img>
      <div className="info-container">
        <div className="product-name">Dress {cardIndex}</div>
        <div className="product-price">$ 800</div>
      </div>
    </div>
  );
};
