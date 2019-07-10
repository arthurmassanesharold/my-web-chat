// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const styles = {
  box: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  link_one: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
    margin: '10px',
    padding: '5px',
    textDecoration: 'none',
  },
  link_two: {
    backgroundColor: '#c3e6bc',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'darkgreen',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px',
    padding: '5px',
    textDecoration: 'none',
  },
  text: {
    color: 'darkgreen',
    fontSize: '25px',
    fontStyle: 'italic',
  },
};

const SignInMessage = 'Already have an account?';
const SignInName = 'Sign In';
const SignUpName = 'Sign Up';

const AuthenticationHeader = () => (
  <div style={styles.box}>
    <Link to={ROUTES.SIGN_UP} style={styles.link_one}>{SignUpName}</Link>
    <span style={styles.text}>{SignInMessage}</span>
    <Link to={ROUTES.SIGN_IN} style={styles.link_two}>{SignInName}</Link>
  </div>
);

export default AuthenticationHeader;
