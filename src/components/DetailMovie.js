import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import { Card, CardDeck, Col, Row, Container } from "react-bootstrap";
import { MDBMask, MDBView, MDBContainer } from "mdbreact";

const APIKEY = process.env.REACT_APP_KEYAPI;
const APIURL = process.env.REACT_APP_URL;

function DetailMovie() {
  const [movie, setMovie] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const url = `${APIURL}movie/${id}?api_key=${APIKEY}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();

        console.log("url", url);

        setMovie(data);
        setIsloading(false);
      } catch (e) {
        console.log("loading data error", e);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${APIURL}movie/${id}/similar?api_key=${APIKEY}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();

        console.log("url", url);

        setSimilarMovies(data.results);
      } catch (e) {
        console.log("loading data error", e);
      }
    };
    fetchData();
  }, [id]);
  console.log("similar", similarMovies);

  const similarMoviesComp = (
    <div>
      <h1
        className="text-white px-5 "
        style={{ marginLeft: "-30px", paddingTop: "10%" }}
      >
        Similar Movies
      </h1>
      <div
        style={{ overflowX: "scroll", overflowY: "hidden" }}
        className="d-flex"
      >
        {similarMovies.map((movie, index) => {
          if (movie.poster_path !== null)
            return (
              <Link
                to={`/movie/${movie.id}`}
                // to={`/movie/${movie.id}/${movie.original_title.replace(
                //   /\s/g,
                //   "+"
                // )}`}
                className="linkMovie"
                key={index}
              >
                <MDBContainer style={{ width: "250px" }} className="pt-5">
                  <MDBView hover zoom>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                      className="img-fluid"
                      alt={movie.title}
                      style={{ cursor: "pointer" }}
                    />
                  </MDBView>
                </MDBContainer>
              </Link>
            );
        })}
      </div>
    </div>
  );

  return (
    <div>
      {isLoading || !similarMovies ? (
        <></>
      ) : (
        <div>
          <Movie movie={movie} id={id} />
          {similarMovies.length !== 0 ? similarMoviesComp : <></>}
        </div>
      )}
    </div>
  );
}

export default DetailMovie;
