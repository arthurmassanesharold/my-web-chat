// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavigationHeader from 'pages/NavigationHeader';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import LandingPage from 'pages/Landing';
import * as ROUTES from 'constants/routes';
import store, { persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <NavigationHeader />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
