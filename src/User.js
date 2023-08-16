import home from './home.png'
import wishlist from './love.png'
import cart from './shopping-cart.png'
import user from './user.png'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function User(){
    const notify = () => toast("Wow so easy!");


    return (
      <div style={{fontWeight:'bold'}}>
        <center>
          Loading....
        </center>
      </div>
    );

        
    

}

export default User;