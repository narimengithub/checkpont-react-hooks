import React from "react";
import StarRating from "./StarRating";

const MovieCard = ({ movie}) => {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} /> 
      <p>{movie.date}</p>
   
    </div>
  );
};

export default MovieCard;
