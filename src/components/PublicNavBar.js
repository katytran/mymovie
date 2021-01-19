import React from "react";
import SearchForm from "./SearchForm";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function PublicNavBar({ query, setQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    //e.preventDefault();
    let newQuery = searchTerm;
    setQuery(newQuery);
    setSearchTerm("");
  };

  return (
    <Navbar variant="dark" className="nav_text nav">
      <Navbar.Brand
        as={Link}
        to="/movie/now_playing"
        className="nav_brand font-weight-bold"
      >
        MY MOVIE
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/movie/upcoming">
          UPCOMING
        </Nav.Link>

        <Nav.Link as={Link} to="/movie/top_rated">
          TOP MOVIES
        </Nav.Link>
      </Nav>
      <SearchForm
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
      />
    </Navbar>
  );
}

export default PublicNavBar;
