import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

const APIKEY = process.env.REACT_APP_KEYAPI;

function Movie({ movie, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (movie.video !== false) {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data in trailer", data);
        setTrailerUrl(`https://www.youtube.com/watch?v=${data.results[0].key}`);
      }
    }
    fetchData();
  }, [id]);

  console.log(trailerUrl);

  return (
    <div className="background-image-position">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        className="background-image"
        alt="i"
      />
      <div className="image-inf">
        <Row>
          <Col sm={6} className="pt-5" style={{ textAlign: "center" }}>
            <a href={movie && movie.homepage ? movie.homepage : "#"}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                style={{ width: "70%" }}
              />
            </a>
          </Col>

          <Col sm={6} className="pt-5">
            <div className="card-body d-flex align-items-center">
              <div>
                <h5 className="movie_detail" style={{ fontSize: "3rem" }}>
                  {movie.original_title}
                </h5>
                <p className="movie_detail  pt-2">
                  <FontAwesomeIcon icon={faStar} color="red" />{" "}
                  {movie.vote_average}
                </p>
                <p className="movie_detail">{movie.overview}</p>

                {movie.video !== false ? (
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="fas fa-play play_button "
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Play Trailer"
                    color="red"
                    size="4x"
                    onClick={handleShow}
                  />
                ) : (
                  <></>
                )}
              </div>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  <ReactPlayer url={trailerUrl} />
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Movie;
