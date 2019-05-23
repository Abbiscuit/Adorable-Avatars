import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import NotFound from "./NotFound";

ReactDOM.render(
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
