// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const HomeTitle = 'Home';
const SignInName = 'Sign In';
const SignInMessage = ' Already have an account?  ';
const SignUpName = 'Sign Up';

const Navigation = () => (
  <>
    <Link to={ROUTES.LANDING}>
      <h1>{HomeTitle}</h1>
    </Link>
    <Link to={ROUTES.SIGN_UP}>{SignUpName}</Link>
    {SignInMessage}
    <Link to={ROUTES.SIGN_IN}>{SignInName}</Link>
  </>
);

export default Navigation;
