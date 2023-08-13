import Header from "./Header";
import product from "./productData";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementcart } from "./CartReducer";
import { AddtoWishlist } from "./CartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notfound from "./notfound.gif";
import wishlisticon from "./wishlist-icon.png";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const filteredProducts = product;

  const dispatch = useDispatch();
  // const notify = () => toast("Wow so easy!");
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
      <center>
        <div class="search">
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
                    <div className="wishlist-icon">
                      <img className="addtowishlist" src={wishlisticon}></img>
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
                      <button onClick={() => dispatch(incrementcart(data))}>
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
