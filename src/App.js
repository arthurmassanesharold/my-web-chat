// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from 'pages/Navigation';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import LandingPage from 'pages/Landing';

import * as ROUTES from 'constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
    </div>
  </Router>
);

export default App;
