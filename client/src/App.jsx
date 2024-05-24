import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";

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

  let addMovie = async (newMovie) => {
    try {
      let res = await fetch("http://localhost:9001/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });
      console.log(res);
      let message = res.text;
      console.log(message);
      renderMovies();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!movies) {
      getMovies();
    }
  }, []);

  let renderMovies = () => {
    if (movies) {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Release Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.releaseyear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <div>No movies found!</div>;
    }
  };

  let renderLoading = () => {
    return <div>...Loading</div>;
  };

  return (
    <>
      <div className="App">
        <h1>Welcome to Movies Catalog!</h1>
        <Form addMovie={addMovie} />
        <div>{loading ? renderLoading() : renderMovies()}</div>
      </div>
    </>
  );
}

export default App;
