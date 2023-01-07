import React from "react";
import StarRating from "./StarRating";
import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

return (
  <div>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
      <StarRating rating={movie.rating} /> 
      </Card.Text>
      <Link to={`/details/${movie.id}`}>
   <Button variant="primary">Info</Button>
</Link>
     


    </Card.Body>
  </Card>
  </div>
)
}

export default MovieCard;
