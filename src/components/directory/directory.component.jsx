import React, { useState, useEffect } from 'react';
import SearchBox from '../searchbox/search-box.component';
import CardList from '../cardList/card-list.component';
import Scroll from '../scroll/scroll.component';
import Spinner from '../spinner/spinner.component';

import { TextMessage, DirectoryContainer } from './directory.styles';

const Directory = () => {
  const [avatars, setAvatars] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    const getAvatars = async () => {
      const responseAvatar = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const jsonAvatar = await responseAvatar.json();

      setAvatars(jsonAvatar);
    };

    getAvatars();
  }, []);

  const onSearchChange = e => {
    setSearchField(e.target.value);
  };

  const filterdAvatars = avatars.filter(avatar => {
    return avatar.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <DirectoryContainer>
      {avatars.length ? (
        <React.Fragment>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            {filterdAvatars.length ? (
              <CardList avatars={filterdAvatars} />
            ) : (
              <TextMessage>
                入力内容にマッチするアバターが見つかりませんでした...
              </TextMessage>
            )}
          </Scroll>
        </React.Fragment>
      ) : (
        <DirectoryContainer>
          <Spinner />
          <p>Loading Now...</p>
        </DirectoryContainer>
      )}
    </DirectoryContainer>
  );
};

export default Directory;
