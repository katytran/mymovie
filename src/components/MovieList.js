import React from "react";
import DetailMovie from "./DetailMovie";
import { Link } from "react-router-dom";
import { Card, CardDeck, Col, Row, Container } from "react-bootstrap";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

function MovieList({ movieList }) {
  //console.log(movieList);
  return (
    <Container>
      <CardDeck>
        <Row>
          {movieList.map((movie, index) => {
            return (
              <Col md={4} className="pt-5">
                {
                  //     <div className="card movie_card">
                  //       <div className="movie_card">
                  //         <img
                  //           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  //           className="card-img-top poster"
                  //           alt="..."
                  //         />

                  //         <FontAwesomeIcon
                  //           icon={faPlayCircle}
                  //           className="fas fa-play play_button"
                  //           data-toggle="tooltip"
                  //           data-placement="bottom"
                  //           title="Play Trailer"
                  //           color="red"
                  //           size="4x"
                  //         />
                  //       </div>

                  //       <div className="card-body">
                  //         <h5 className="card-title">{movie.original_title}</h5>
                  //         <span className="movie_info">
                  //           {movie.release_date.slice(0, 4)}
                  //         </span>
                  //         <span className="movie_info float-right">
                  //           <FontAwesomeIcon icon={faStar} color="red" />{" "}
                  //           {movie.vote_average}
                  //         </span>
                  //       </div>
                  //     </div>
                  //  }
                  <Link
                    to={`/movie/${movie.id}/${movie.original_title}`}
                    className="linkMovie"
                    key={index}
                  >
                    <MDBContainer>
                      <MDBView hover zoom>
                        <img
                          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                          className="img-fluid"
                          alt={movie.title}
                        />
                        <MDBMask
                          className="d-flex container-fluid"
                          overlay="black-strong"
                        >
                          <div className="text-center text-white scroll">
                            <h3 className="py-3">{movie.title}</h3>

                            {movie.release_date !== undefined
                              ? movie.release_date.substring(0, 4)
                              : ""}

                            {movie.overview}
                          </div>
                        </MDBMask>
                      </MDBView>
                      <Card.Footer style={{ fontSize: 15 }}>
                        <span className="text-danger h5">&#9733;</span>
                        {movie.vote_average}
                      </Card.Footer>
                      <p style={{ fontSize: 15 }}>
                        <span className="text-danger">&hearts;</span>
                        {movie.popularity}
                      </p>
                    </MDBContainer>
                  </Link>
                }
              </Col>
            );
          })}
        </Row>
      </CardDeck>
    </Container>
  );
}

export default MovieList;
