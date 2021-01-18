import { queryHelpers } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import PaginationBar from "../components/PaginationBar";
import MovieList from "../components/MovieList";

const APIKEY = process.env.REACT_APP_KEYAPI;
const APIURL = process.env.REACT_APP_URL;

function MovieListPage({ type, query }) {
  const [movieList, setMovieList] = useState([]);
  const [pageNum, setPagenum] = useState(1);
  const [isLoading, setIsloading] = useState(true);
  const [filterMovies, setFilterMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  let endPoint;
  console.log(query);
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      if (type === "now_playing") {
        endPoint = "movie/now_playing";
      }
      if (type === "upcoming") {
        endPoint = "movie/upcoming";
      }

      if (type === "top_rated") {
        endPoint = "movie/top_rated";
      }

      let url = `${APIURL}${endPoint}?api_key=${APIKEY}&language=en-US&page=${pageNum}`;

      if (type === "search") {
        url = `${APIURL}search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=${pageNum}`;
      }
      console.log("query", query);

      const response = await fetch(url);
      const data = await response.json();

      console.log(url);
      setMovieList(data.results);
      //setFilterMovies(data.results);
      setTotalPage(data.total_pages);
      setIsloading(false);
    };
    fetchData();
  }, [type, pageNum, query]);

  // useEffect(() => {
  //   console.log("Search term", searchTerm);
  //   // if (searchTerm !== "") {
  //   //   let filter = movieList.filter((movie) => {
  //   //     return movie.original_title
  //   //       .toLowerCase()
  //   //       .includes(searchTerm.toLowerCase());
  //   //   });
  //   //   setFilterMovies(filter);
  //   // }
  // }, [searchTerm]);

  return (
    <div>
      {isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <div>
          <MovieList movieList={movieList} />
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPagenum}
            totalPageNum={totalPage}
          />
        </div>
      )}
    </div>
  );
}

export default MovieListPage;
