import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Movie({ movie }) {
  console.log(movie);

  return (
    <div className="movie_container">
      <Row>
        <a href={movie.homepage}>
          <Col md={6} className="pt-5">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
            />
          </Col>
        </a>
        <Col md={6} className="pt-5">
          <div className="card-body">
            <h5 className="movie_detail">{movie.original_title}</h5>
            <span className="movie_detail">{movie.overview}</span>
            <span>{movie.release_date}</span>
            <span className="movie_detail float-right pt-2">
              <FontAwesomeIcon icon={faStar} color="red" /> {movie.vote_average}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Movie;
