// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const HomeTitle = 'Home';
const SignInName = 'Sign In';
const SignInMessage = ' Already have an account?  ';
const SignUpName = 'Sign Up';

const styles = {
  link: {
    backgroundColor: 'green',
    color: 'white',
    padding: '5px',
    textDecoration: 'none',
  },
  navBox: {
    backgroundColor: 'lightgreen',
    border: '5px inset green',
    padding: '15px',
    textAlign: 'center',
  },
  title: {
    color: 'green',
    textDecoration: 'none',
  },
};

const Navigation = () => (
  <>
    <div style={styles.navBox}>
      <Link to={ROUTES.LANDING} style={styles.title}>
        <h1>{HomeTitle}</h1>
      </Link>
      <Link to={ROUTES.SIGN_UP} style={styles.link}>{SignUpName}</Link>
      {SignInMessage}
      <Link to={ROUTES.SIGN_IN} style={styles.link}>{SignInName}</Link>
    </div>
  </>
);

export default Navigation;
