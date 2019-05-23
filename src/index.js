import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav/Nav";

ReactDOM.render(
  <Router>
    <Nav />
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
