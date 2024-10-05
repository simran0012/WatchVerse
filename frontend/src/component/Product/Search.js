import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // This handler can be used for additional logic if needed
    // Currently, it won't redirect to a new page since we are disabling the button
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Watch ..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} // Update the keyword state
        />
        {/* The Search button is disabled */}
        <input type="submit" value="Search" disabled />
      </form>
    </Fragment>
  );
};

export default Search;
