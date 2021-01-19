import "./App.css";
import MovieListPage from "./page/MovieListPage";
import DetailMovie from "./components/DetailMovie";
import PublicNavBar from "./components/PublicNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <PublicNavBar query={query} setQuery={setQuery} />

      {/* {query ? (
        ""
      ) : (
        <img
          src="https://miro.medium.com/max/5200/1*FlVcGpVAvaa9VtndGA4YsQ.jpeg"
          className="banner"
        ></img>
      )} */}

      <Switch>
        <Route
          path="/movie/upcoming"
          render={(props) => <MovieListPage {...props} type="upcoming" />}
        />
        <Route
          path="/movie/top_rated"
          render={(props) => <MovieListPage {...props} type="top_rated" />}
        />
        <Route
          path="/movie/now_playing"
          render={(props) => <MovieListPage {...props} type="now_playing" />}
        />

        <Route
          path="/search"
          render={(props) => (
            <MovieListPage {...props} type="search" query={query} />
          )}
        />
        <Route path="/movie/:id/:name" component={DetailMovie} />
      </Switch>
    </div>
  );
}

export default App;
