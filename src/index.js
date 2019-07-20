import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/about/about.component';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav.component';
import NotFound from './pages/not-found.component';
import AvatarDetails from './components/avatar-details/avatar-details.component';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Nav />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/avatars/:id" component={AvatarDetails} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
