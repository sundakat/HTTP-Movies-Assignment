import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        
          <div key={stars} className="movie-star">
            {stars}
          </div>
        
        <Link to={`/update-movie/${id}`}>
          {''}
          <button className="edit">Edit Movie</button>{" "}
        </Link>
      </div>
  );
};

export default MovieCard;
