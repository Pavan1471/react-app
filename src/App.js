import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [temp, setTemp] = useState([]);
  const [name, setName] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const LoadingSpinner = () => {


    return (
      <div>
        {loading ? <div>Loading...</div> : null}
      </div>
    );
  };
  const LoadingError = () => {


    return (
      <div>
        {data.length === 0 ? <div>No movies Found</div> : null}
      </div>
    );
  };

  const changeEvent = (e) => {
    setUsers(e.target.value);
  };

  const clickEvent = (e) => {
    // const fetchData = () => {
    console.log(users);
    e.preventDefault();

    fetch(
      `https://www.omdbapi.com/?s=${users}&apikey=263d22d8`
    )
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setData(value.Search)
        console.log(value.Search)
        // setTemp(data.main.temp)
        // setName(data.name)
      })
      .catch(error => {
        console.log(error)
        setError(true)
      }

      )

    setLoading(false);

  };

  return (

    <center>

      <div className="search-conatiner">
        <input onChange={changeEvent} placeholder=" Search by Address"></input>
        <button onClick={clickEvent}>Search</button>
      </div>

      <div>{temp}</div>
      <div>{name}</div>
      {data.map(movie =>
        <center>
          <div class="card1">
            <img src={movie.Poster}></img>
            <div class="container1">
              <h4><b>{movie.Title}</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </center>



      )
      }
      <LoadingSpinner />
      <LoadingError />
    </center>

  );
}

export default App;