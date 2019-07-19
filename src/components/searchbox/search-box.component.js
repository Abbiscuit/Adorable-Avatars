import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Avatars"
        className="pa3 mb3 b--gray ba"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
