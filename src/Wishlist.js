

import React from "react";
import wishlist from './wishlist.png'
import './App.css';
import { useDispatch } from "react-redux";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { removefromwishlist } from "./CartReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Wishlist(){
  const removefromWishlist =(data)=>{
    dispatch(removefromwishlist(data.id));
    toast.error("Removed from cart");

  }
    const dispatch = useDispatch();
  const wishlists = useSelector((state)=>state.CartReducer.wishlistValues);
  console.log(wishlist)
  const cartEmpty = useSelector((state)=>state.CartReducer.cartValues.length);
    return(
        <>
        
        <center>
        <ToastContainer autoClose={2000}
/>
            
{
  wishlists.length===0 ?
<div>
    
        
    <img className="cart-logoo" src={wishlist}></img>
    <div className="cart-textt">No items added to wishlist</div>
  </div>
  
  
  :
  
    
  <div>
    <center>
        <h1>Wishlist</h1>
        </center>
  {wishlists.map(function (data) {
    return (
      <div className="cart-container">
        <img className="cartimg" src={data.img}></img>
        <div>
        <div className="cart-name">{data.title}</div>
        <div>{data.newPrice} $</div>
        </div>
        <div >
          <button className="button" onClick={()=>removefromWishlist(data.id)} >Remove</button>

        </div>

      </div>
    );
  })}
 
</div>
}
      </center>
</>
    )
}
export default Wishlist;
