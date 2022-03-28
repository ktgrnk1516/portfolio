import React from "react";
import Product from "./Product";
import { products } from "../../data";

import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Works</h1>
        <p className="pl-desc">
          個人開発したアプリを紹介します。
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} desc={item.desc}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
