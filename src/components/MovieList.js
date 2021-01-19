import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck, Col, Row, Container } from "react-bootstrap";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

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
              </Col>
            );
          })}
        </Row>
      </CardDeck>
    </Container>
  );
}

export default MovieList;
