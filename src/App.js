import React, { Component } from 'react';
import SearchBox from './components/searchbox/search-box.component';
import CardList from './components/cardList/cardList.component';
import Scroll from './components/scroll/scroll.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatars: [],
      searchfield: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ avatars: users }));
  }

  render() {
    console.log('render');
    const { avatars, searchfield } = this.state;

    const filterdAvatars = avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !avatars.length ? (
      <div className="tc f2">
        <h1>Opps!</h1>
        <p>Loading Now...</p>
      </div>
    ) : (
      <div className="tc">
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList avatars={filterdAvatars} />
        </Scroll>
      </div>
    );
  }
}

export default App;
