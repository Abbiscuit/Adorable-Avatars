import React, { useState, useEffect } from 'react';
import SearchBox from './components/searchbox/search-box.component';
import CardList from './components/cardList/card-list.component';
import Scroll from './components/scroll/scroll.component';
import './App.css';

function App() {
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
    <div className="App">
      {avatars.length ? (
        <React.Fragment>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList avatars={filterdAvatars} />
          </Scroll>
        </React.Fragment>
      ) : (
        <div className="App">
          <h1>Opps!</h1>
          <p>Loading Now...</p>
        </div>
      )}
    </div>
  );
}

export default App;
