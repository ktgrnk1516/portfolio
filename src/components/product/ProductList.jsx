import React from "react";
import Product from "./Product";
import { products } from "../../data";

import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inpire.</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
          aliquam! Consequuntur error sapiente accusamus est dolore eligendi
          sint molestiae maxime.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
