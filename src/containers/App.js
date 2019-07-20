import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../components/nav/nav.component';
import NotFound from '../pages/not-found.component';
import AvatarDetails from '../components/avatar-details/avatar-details.component';
import About from '../pages/about/about.component';
import HomePage from '../pages/homepage/homepage.component';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/avatars/:id" component={AvatarDetails} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />>
      </Switch>
    </Router>
  );
}

export default App;
