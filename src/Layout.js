import { Outlet, Link } from "react-router-dom";
import home from './home.png'
import wishlist from './love.png'
import cart from './shopping-cart.png'
import user from './user.png'
import './App.css';
import {useSelector } from "react-redux/es/hooks/useSelector";

const Layout = () => {
  const cart_quantity = useSelector((state)=>state.CartReducer.cartValues.length);
  return (
    <>
     <Outlet />
    <div className="footer">
      
     {/* <div className="nav"> */}
     <Link to="/">
              <img className="foot" src={home}></img>
            </Link>
      
      
      <Link to="/wishlist">
              
              <img className="foot"src={wishlist}></img>
            </Link>
      
      
      <Link to="/cart">
      
              <div className="cart">
              <span class="count">{cart_quantity}</span>
              <img className="foot"src={cart}></img>

              </div>
            </Link>
      
     <Link to="/blogs">
              <img className="foot" src={user}></img>
     </Link>
     {/* </div> */}
    </div>

    </>
  )
};

export default Layout;