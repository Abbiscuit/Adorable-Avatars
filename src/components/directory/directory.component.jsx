import React, { useState, useEffect } from 'react';
import SearchBox from '../searchbox/search-box.component';
import CardList from '../cardList/card-list.component';
import Scroll from '../scroll/scroll.component';
import Spinner from '../spinner/spinner.component';

import './directory.styles.scss';

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
    <div className="directory">
      {avatars.length ? (
        <React.Fragment>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList avatars={filterdAvatars} />
          </Scroll>
        </React.Fragment>
      ) : (
        <div className="directory">
          <Spinner />
          <p>Loading Now...</p>
        </div>
      )}
    </div>
  );
};

export default Directory;
