import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListPage from "./page/MovieListPage";
import DetailMovie from "./components/DetailMovie";
import PublicNavBar from "./components/PublicNavBar";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <PublicNavBar query={query} setQuery={setQuery} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <MovieListPage {...props} type="upcoming" />}
        />
        <Route
          exact
          path="/movie/upcoming"
          render={(props) => <MovieListPage {...props} type="upcoming" />}
        />
        <Route
          exact
          path="/movie/top_rated"
          render={(props) => <MovieListPage {...props} type="top_rated" />}
        />
        <Route
          exact
          path="/movie/now_playing"
          render={(props) => <MovieListPage {...props} type="now_playing" />}
        />

        <Route
          path="/search"
          render={(props) => (
            <MovieListPage {...props} type="search" query={query} />
          )}
        />
        <Route exact path="/movie/:id" component={DetailMovie} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
