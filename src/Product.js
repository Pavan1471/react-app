import React from "react";
import { useParams } from "react-router-dom";
import product from "./productData";
import "./App.css";

function Product() {
  console.log(useParams);
  const { userId } = useParams();
  const productdata = product.find((data) => data.id == userId);

  return (
    // <div>{productdata.title}</div>
    <>
      <div className="product-container">
        <center>
          <img className="product-img" src={productdata.img}></img>
        </center>
      </div>
     <div className="product-bg">
     <div className="product-name">{productdata.title}</div>
        <div className="product-price">{productdata.newPrice} $</div>
      <h3>Description</h3>
      <div className="desc">
        Nike Air technology consists of pressurised air inside a tough yet
        flexible bag, and provides more flexibility and spring without
        compromising structure.
      </div>
      <h3>Color</h3>
      <div className="colors">
        <div id="blue"></div>
        <div id="black"></div>
        <div id="white"></div>
      </div>
     </div>
    </>
  );
}

export default Product;
