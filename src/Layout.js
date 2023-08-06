import { Outlet, Link } from "react-router-dom";
import home from './home.png'
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
              <img className="foot"src={home}></img>
            </Link>
      
      
      <Link to="/contact">
              <img className="foot"src={home}></img>
            </Link>
      
     <Link to="/blogs">
              <img className="foot" src={home}></img>
     </Link>
     {/* </div> */}
    </div>

    </>
  )
};

export default Layout;