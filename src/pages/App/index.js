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
import PasswordForgetPage from 'pages/PasswordForget';
import Homepage from 'pages/Home';
import AccountPage from 'pages/Account';
import AdminPage from 'pages/Admin';

import * as ROUTES from 'pages/constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignupPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
