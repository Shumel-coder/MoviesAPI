import { useState } from "react";
// import Table from './Table';
// import Form from './Form';

const MoviesContainer = (props) => {
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove movie at index
        */
  };

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new movie to movies array in state
        */
  };

  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <p>Add a new movie with a name, genre, and release year to the table.</p>
      {/*TODO - Add Table Component */}

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
    </div>
  );
};

export default MoviesContainer;
