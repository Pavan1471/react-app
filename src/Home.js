import Header from "./Header";
import product from "./productData";
import "./App.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementcart } from "./CartReducer";

const Home = () => {
  const dispatch = useDispatch();
  // const onClick = (productName) => {
  //   dispatch(incrementcart(productName));
  // };

  return (
    <div>
      {product.map(function (data) {
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
                  onClick={()=>dispatch(incrementcart(data))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </center>
        );
      })}
      <center>Shopping App</center>
      <Header />
      <Header />
      <Header />
    </div>
  );
};

export default Home;
