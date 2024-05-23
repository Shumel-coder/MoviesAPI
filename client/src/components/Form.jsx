import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseyear, setReleaseyear] = useState(0);


  let handleNameChange = (event) => {
    setName(event.target.value)
  }

  let handleGenreChange = (event) => {
    setName(event.target.value)
  }

  let handleReleaseyearChange = (event) => {
    setName(event.target.value)
  }
  return (
    <form>
      <label>
        Name
        <input type="text" onChange={}/>
      </label>

      <label>
        Name
        <input type="text" onChange={}/>
      </label>

      <label>
        Name
        <input type="text" onChange={}/>
      </label>
    </form>
  );
}

export default Form;
