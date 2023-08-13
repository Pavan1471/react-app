

import React from "react";
import wishlist from './wishlist.png'
import './App.css';

function Wishlist(){
    return(
        <>
        <center>
        <div>
    
    <img className="cart-logoo" src={wishlist}></img>
    <div className="cart-textt">No items added to wishlist</div>
  </div>



  
        </center>
        </>
    )
}
export default Wishlist;