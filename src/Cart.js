import React from "react";
import cartlogo from './cart.png'
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { removecart } from "./CartReducer";
import {useSelector } from "react-redux/es/hooks/useSelector";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.CartReducer.cartValues);
  const cartEmpty = useSelector((state)=>state.CartReducer.cartValues.length);
  // console.log(totalPrice)
    return (
      <center>
{
  cart.length===0 ?

  <div>
    
    <img className="cart-logo" src={cartlogo}></img>
    <div className="cart-text">No items added to cart</div>
  </div>
  
  :
  
    
  <div>
  {cart.map(function (data) {
    return (
      <div className="cart-container">
        <img className="cartimg" src={data.img}></img>
        <div>
        <div className="cart-name">{data.title}</div>
        <div>{data.newPrice} $</div>
        </div>
        <div >
          <button className="button" onClick={()=>dispatch(removecart(data.id))} >Remove</button>

        </div>

      </div>
    );
  })}
 
</div>
}
      </center>
    )
  };
  
  export default Cart;