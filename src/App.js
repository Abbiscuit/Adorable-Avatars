import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from "./Scroll";
import "./App.css";
import { avatars } from "./avatars.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatars: avatars,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterdAvatars = avatars.filter(avatar => {
      return avatar.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Adorable Avatars</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll avatars={this.state.avatars}>
          <CardList avatars={filterdAvatars} />
        </Scroll>
      </div>
    );
  }
}

export default App;
