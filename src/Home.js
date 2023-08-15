import Header from "./Header";
import product from "./productData";
import "./App.css";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementcart } from "./CartReducer";
import {addtowishlist} from './CartReducer';
import { AddtoWishlist } from "./CartReducer";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notfound from "./notfound.gif";
import wishlisticon from "./wishlist-icon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Home = () => {
  const notify = () => toast("Added to Wishlist");
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const filteredProducts = product;

  const dispatch = useDispatch();
  const AddtoCart =(data)=>{
    dispatch(incrementcart(data));
    toast.success("Added to Cart");

  }
  
  // const onClick = (productName) => {
  //   dispatch(incrementcart(productName));
  //
  function handleSearch() {
    console.log(search);
    // search.
    // const item = "samsung"
    setFilteredProducts(
      product.filter(function (product) {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
    console.log(filteredProducts);
    // return filteredProducts;
  }
  useEffect(() => {
    // This effect will run once when the component mounts.
    setFilteredProducts(product);
  }, []);
  return (
    <>
       <Navbar/>
       <ToastContainer autoClose={2000}
/>
      <center>
      
        {/* <div class="search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            placeholder=" Search..."
            type="text"
          ></input>
          <button className="btnn" type="submit" onClick={handleSearch}>
            Search
          </button>
        </div> */}
   <div class="search">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
         placeholder="Search..."/>
        <button onClick={handleSearch} type="submit">Go</button>
      </div>

        
      </center>

      <center>
      <div>
   <center>
   <img className="banner" src="https://i.pinimg.com/1200x/3d/b8/46/3db8465ae5c8845947b9b23578588639.jpg"></img>
   </center>
</div>
      </center>

      {filteredProducts.length === 0 ? (
        <center>
          <img id="notfound" src={notfound}></img>
          <div className="cart-text">No Search items</div>
        </center>
      ) : (
        <>

          <div className="card-container">
            {filteredProducts.map(function (data) {
              return (
                <center>
                  <div class="card">
                    <div onClick={() => dispatch(addtowishlist(data))} className="wishlist-icon">
                      <img onClick={notify} className="addtowishlist" src={wishlisticon}></img>
                    </div>

                    <Link to={`/product/${data.id}`} key={data.id}>
                      <img className="img" src={data.img} alt="Image"></img>
                    </Link>

                    <div class="card-content">
                      <p className="card-title">{data.title}</p>
                      <p className="card-price">{data.newPrice}$</p>
                      {/* <p>
                  <bold>Quantity:</bold>
                  {data.quantity}
                </p> */}

                      <br></br>
                      <br></br>
                      <button className="button" onClick={() => AddtoCart(data)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </center>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

