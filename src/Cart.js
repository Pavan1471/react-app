import React from "react";
import {useSelector } from "react-redux/es/hooks/useSelector";
const Cart = () => {
  const cart = useSelector((state)=>state.CartReducer.cartValues);
  const cartEmpty = useSelector((state)=>state.CartReducer.cartValues.length);
    return (
      <center>



        
        <div>
      {cart.map(function (data) {
        return (
          <center>
            <div class="card">
              <img src={data.img} alt="Image"></img>

              <div class="card-content">
                <p>{data.title}</p>
                <p>{data.price}$</p>{" "}
                <p>
                  <bold>Quantity:</bold>
                  {data.quantity}
                </p>
                <br></br>
                <br></br>
                <button
                
                >
                  Add to cart
                </button>
              </div>
            </div>
          </center>
        );
      })}
     
    </div>
      </center>
    )
  };
  
  export default Cart;