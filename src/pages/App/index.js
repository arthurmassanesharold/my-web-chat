// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from 'pages/Navigation';
import LandingPage from 'pages/Landing';
import SignupPage from 'pages/SignUp';
import SignInPage from 'pages/SignIn';
import Homepage from 'pages/Home';

import * as ROUTES from 'constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignupPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
    </div>
  </Router>
);

export default App;
