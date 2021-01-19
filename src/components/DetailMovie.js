import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Movie from "./Movie";

const APIKEY = process.env.REACT_APP_KEYAPI;
const APIURL = process.env.REACT_APP_URL;
function DetailMovie() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  console.log("id", id);

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

  return (
    <div>
      {isLoading ? <h1>isLoading</h1> : <Movie movie={movie} id={id} />}
    </div>
  );
}

export default DetailMovie;
