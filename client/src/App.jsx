import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [movies, setMovies] = useState(null);
  let [loading, setLoading] = useState(false);

  let getMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch("http://localhost:9001/movies");
      let data = await response.json();
      console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let addMovie = async () => {
    try {
    } catch {}
  };

  useEffect(() => {
    getMovies();
  });

  let renderMovies = () => {
    if (movies) {
      return movies.map((movie) => {
        return (
          <div>
            <h3>{movie.name}</h3>
            <h4>{movie.genre}</h4>
            <h4>{movie.releaseyear}</h4>
          </div>
        );
      });
    } else {
      return <div>No movies found!</div>;
    }
  };

  renderLoading = () => {
    return <div>...Loading</div>;
  };

  return (
    <>
      <div className="App">
        <h1>Welcome to Movies Catalog!</h1>
        <div>{loading ? renderLoading() : renderMovies()}</div>
      </div>
    </>
  );
}

export default App;
