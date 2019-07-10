// @flow
import React from 'react';

const LandingPageTitle = 'Welcome to my Web Chat';

const styles = {
  doggo: {
    height: '250px',
    textAlign: 'center',
    width: 'auto',
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const Landing = () => (
  <>
    <h1 style={styles.title}>{LandingPageTitle}</h1>
    <div style={styles.title}>
      <img src="doggo.jpeg" title="hello" alt="" />
    </div>
  </>
);

export default Landing;
