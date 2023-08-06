import Header from "./Header";
import product from "./productData";
import "./App.css";

const Home = () => {
  return (
    <div>
      {product.map(function (data) {
        return (
          <center>
            <div class="card">
              <img src={data.img} alt="Image"></img>
          
              <div class="card-content">
                <p>{data.title}</p>
                <p>{data.price}$</p>
                <p><bold>Quantity:</bold>{data.quantity}</p>

                <br></br>
                <br></br>
                <button>Buy</button>
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
