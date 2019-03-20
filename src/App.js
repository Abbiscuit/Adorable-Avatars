import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from "./Scroll";
import "./App.css";
// import { avatars } from "./avatars.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatars: [],
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ avatars: users }));
  }

  render() {
    const { avatars, searchfield } = this.state;

    const filterdAvatars = avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !avatars.length ? (
      <div className="tc">
        <h1 className="f1">Opps!</h1>
        <p className="f2">Loading Now...</p>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Adorable Avatars</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList avatars={filterdAvatars} />
        </Scroll>
      </div>
    );
  }
}

export default App;
