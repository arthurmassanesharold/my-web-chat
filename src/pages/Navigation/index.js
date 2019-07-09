// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const HomeTitle = 'Home';
const SignInName = 'Sign In';
const SignInMessage = '  Already have an account?  ';
const SignUpName = 'Sign Up';

const styles = {
  link: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    margin: '10px',
    padding: '5px',
    textDecoration: 'none',
  },
  navBox: {
    backgroundColor: 'lightgreen',
    border: '5px inset green',
    padding: '15px',
    textAlign: 'center',
  },
  text: {
    color: 'darkgreen',
    fontStyle: 'italic',
  },
  title: {
    color: 'darkgreen',
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
      <span style={styles.text}>{SignInMessage}</span>
      <Link to={ROUTES.SIGN_IN} style={styles.link}>{SignInName}</Link>
    </div>
  </>
);

export default Navigation;
