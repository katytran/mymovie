import React, { useState, useEffect } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
const APIKEY = process.env.REACT_APP_KEYAPI;
const APIURL = process.env.REACT_APP_URL;

function Review({ id }) {
  const [pageNum, setPageNum] = useState(1);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${APIURL}movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("data reviews", reviews);
        setReviews(data.results);
      } catch (e) {
        console.log("loading data error", e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <></>
      ) : (
        <div>
          <h1
            className="text-white px-5 "
            style={{ marginLeft: "-30px", paddingTop: "10%" }}
          >
            Reviews
          </h1>
          <Container>
            {reviews.map((review, index) => {
              return (
                <div class="review_card">
                  <div>
                    <p>{moment(review.created_at).format("LL")}</p>
                    <p
                      class="card-text"
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {review.author_details.username}
                    </p>

                    {[...Array(review.author_details.rating)].map((i) => {
                      return <FontAwesomeIcon icon={faHeart} color="Tomato" />;
                    })}
                  </div>
                  <div>
                    <p class="card-text">
                      {review.content.replace(/(\r\n|\n|\r)/gm, "")}
                    </p>
                  </div>
                </div>
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
}

export default Review;
