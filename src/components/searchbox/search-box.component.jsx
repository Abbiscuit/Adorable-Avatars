import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="アバターを検索"
        onChange={searchChange}
        className="search-box-input"
      />
      <p>アルファベットでタイプしてみよう！</p>
    </div>
  );
};

export default SearchBox;
