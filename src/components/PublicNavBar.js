import React from "react";
import SearchForm from "./SearchForm";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function PublicNavBar({ query, setQuery }) {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let newQuery = searchTerm;
    setQuery(newQuery);
    setSearchTerm("");
    history.push(`/search/${searchTerm}`);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="nav_text nav"
    >
      <Navbar.Brand
        as={Link}
        to="/movie/now_playing"
        className="nav_brand font-weight-bold"
      >
        KATY MOVIE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ textAlign: "center" }}>
          <Nav.Link as={Link} to="/movie/upcoming">
            UPCOMING
          </Nav.Link>

          <Nav.Link as={Link} to="/movie/top_rated">
            TOP MOVIES
          </Nav.Link>
        </Nav>
        <Nav>
          <SearchForm
            className="d-flex"
            handleSearch={handleSearch}
            handleSearchSubmit={handleSearchSubmit}
            searchTerm={searchTerm}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PublicNavBar;
