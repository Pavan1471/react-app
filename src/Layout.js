import { Outlet, Link } from "react-router-dom";
import home from './home.png'
import wishlist from './love.png'
import cart from './shopping-cart.png'
import user from './user.png'
import './App.css';

const Layout = () => {
  return (
    <>
     <Outlet />
    <div className="footer">
      
     {/* <div className="nav"> */}
     <Link to="/">
              <img className="foot" src={home}></img>
            </Link>
      
      
      <Link to="/blogs">
              <img className="foot"src={wishlist}></img>
            </Link>
      
      
      <Link to="/cart">
              <img className="foot"src={cart}></img>
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