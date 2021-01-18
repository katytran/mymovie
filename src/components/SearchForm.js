import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchForm({ handleSearchSubmit, handleSearch, searchTerm }) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Button
        variant="outline-danger"
        onClick={handleSearchSubmit}
        as={Link}
        to={`/search/${searchTerm}`}
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
