import menu from "./menu.png";
import nike from "./nike.png";
import bag from "./bag.png";
import { Slidebar } from "./Slidebar";
import { useState } from "react";
function Navbar() {
//   const [side, setSide] = useState(false);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.visibility="visible";
    // document.body.style.backgroundColor = "grey";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//   function Sidebars() {
//     setSide(true);
//   }
  return (
    <>
       <Slidebar />

      <div className="navbar-container">
        <img onClick={openNav} src={menu}></img>
        <img id="logo-img" src={nike}></img>
        <img src={bag}></img>
      </div>
    </>
  );
}
export default Navbar;
