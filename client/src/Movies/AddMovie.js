import React, { useState } from "react";
import axios from "axios";

const AddNewMovie = props => {
  const [addMovie, setAddMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const id = props.match.params.id;

  const handleChange = e => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
      id: id
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies/`, addMovie)
      .then(() => {
        props.history.push("/");
      }) // after movie is added, pushes you to /home

      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{addMovie.title}</h1>
      <input name="title" placeholder="Title" value={addMovie.title} onChange={handleChange} />
      <input
        name="director"
        placeholder="Director"
        value={addMovie.director}
        onChange={handleChange}
      />
      <input
        name="metascore"
        placeholder="Metascore"
        value={addMovie.metascore}
        onChange={handleChange}
      />
      <input
        type="text"
        name="stars"
        placeholder="Stars"
        value={addMovie.stars}
        onChange={handleChange}
      />
      <button className="add" type="submit">Add Movie</button>
    </form>
  );
};

export default AddNewMovie;
