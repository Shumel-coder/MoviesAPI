import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseyear, setReleaseyear] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleReleaseyearChange = (event) => {
    setReleaseyear(event.target.value);
  };

  const addMovie = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      genre,
      releaseyear,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const res = await fetch("http://localhost:9001/movies", requestOptions);
      if (!res.ok) {
        throw new Error("Failed to add movie");
      }
      const result = await res.json();
      console.log(result);
      alert("Added Movie Successfully!");
      setName("");
      setGenre("");
      setReleaseyear("");
    } catch (error) {
      console.log("Error adding movie:", error);
      alert("Failed to add movie. Please try again.");
    }
  };

  return (
    <form>
      <h2>Add a New Movie</h2>
      <label>
        Name
        <input type="text" onChange={handleNameChange} value={name} />
      </label>
      <br />
      <label>
        Genre
        <input type="text" onChange={handleGenreChange} value={genre} />
      </label>
      <br />
      <label>
        Release Year
        <input
          type="number" // Change input type to "number"
          onChange={handleReleaseyearChange}
          value={releaseyear}
        />
      </label>
      <br />
      <button onClick={addMovie}>Submit</button>
    </form>
  );
}

export default Form;
