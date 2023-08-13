import menu from "./menu.png";
import nike from "./nike.png";
import bag from "./bag.png";
function Navbar(){
    return(
<>

<div className="navbar-container">
<img  src={menu}></img>
<img id="logo-img" src={nike}></img>
<img src={bag}></img>

</div>

</>
    )
}
export default Navbar;