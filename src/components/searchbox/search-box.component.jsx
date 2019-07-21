import React from 'react';
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchBoxText
} from './search-box.styles';

const SearchBox = ({ searchChange }) => {
  return (
    <SearchBoxContainer>
      <SearchBoxInput
        type="search"
        placeholder="アバターを検索"
        onChange={searchChange}
      />
      <SearchBoxText>アルファベットでタイプしてみよう！</SearchBoxText>
    </SearchBoxContainer>
  );
};

export default SearchBox;
