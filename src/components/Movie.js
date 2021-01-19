import React, { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

const APIKEY = process.env.REACT_APP_KEYAPI;

function Movie({ movie, id }) {
  console.log(movie);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      setTrailerUrl(`https://www.youtube.com/watch?v=${data.results[0].key}`);
    }
    fetchData();
  }, []);
  console.log(trailerUrl);
  return (
    <div
      className="background-image-position"
      /* className="movie_container" */
      /* style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/srYya1ZlI97Au4jUYAktDe3avyA.jpg)`,
      }} */
    >
      <div className="image-inf">
        <Col md={6} className="pt-5" style={{ textAlign: "center" }}>
          <a href={movie.homepage}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              style={{ width: "70%" }}
            />

            {/* <Button variant="primary" onClick={handleShow}>
              {" "}
              Trailer
            </Button> */}
          </a>
        </Col>

        <Col md={6} className="pt-5">
          <div className="card-body">
            <h5 className="movie_detail" style={{ fontSize: "3rem" }}>
              {movie.original_title}{" "}
            </h5>
            <span className="movie_detail">{movie.overview}</span>
            <span>{movie.release_date}</span>
            <span className="movie_detail float-right pt-2">
              <FontAwesomeIcon icon={faStar} color="red" /> {movie.vote_average}
            </span>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
              color="red"
              size="4x"
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Body
                /* style={{ maxWidth: "fit-content" }} */ style={{
                  backgroundColor: "black",
                }}
              >
                <ReactPlayer url={trailerUrl} />
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </div>
      <img
        src="https://image.tmdb.org/t/p/w1280/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
        className="background-image"
        alt="i"
      />
    </div>
  );
}

export default Movie;
