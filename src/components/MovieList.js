import React from "react";
import DetailMovie from "./DetailMovie";
import { Link } from "react-router-dom";
import { Card, CardDeck, Col, Row, Container } from "react-bootstrap";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieList({ movieList }) {
  //console.log(movieList);
  return (
    <Container className="col-8">
      <CardDeck>
        <Row>
          {movieList.map((movie, index) => {
            return (
              <Col md={4} className="pt-5" style={{ witdh: "18rem" }}>
                <Link
                  to={`/movie/${movie.id}/${movie.original_title}`}
                  className="linkMovie"
                  key={index}
                >
                  <div className="card movie_card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="card-img-top poster"
                      alt="..."
                    />
                    <div className="card-body">
                      {/* <FontAwesomeIcon
                      icon={faPlayCircle}
                      className="fas fa-play play_button"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Play Trailer"
                      color="red"
                      size="4x"
                    /> */}

                      <h5 className="card-title">{movie.original_title}</h5>
                      <span className="movie_info">
                        {movie.release_date.slice(0, 4)}
                      </span>
                      <span className="movie_info float-right">
                        <FontAwesomeIcon icon={faStar} color="red" />{" "}
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </CardDeck>
    </Container>
  );
}

export default MovieList;
