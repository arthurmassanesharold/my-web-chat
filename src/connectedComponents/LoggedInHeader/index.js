// @flow
import React, { type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { setUserInfo } from 'pages/SignIn/actions';
import { connect } from 'react-redux';
import firebase from 'config';
import * as ROUTES from 'constants/routes';

const mapDispatchToProps = {
  setUserInfo,
};

type ComponentProps = {|
  userInfo: UserInfo,
|}
type Props = {|
  ...ComponentProps,
  ...$ExtractObject<typeof mapDispatchToProps>
|};

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logout: {
    backgroundColor: '#c3e6bc',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'darkgreen',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px',
    padding: '5px',
  },
  text: {
    color: 'darkgreen',
    fontSize: '25px',
    fontStyle: 'italic',
  },
  title: {
    alignItems: 'center',
    border: '3px inset white',
    color: 'green',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    textDecoration: 'none',
    width: '10%',
  },
};

const LoggedInHeader = (props: Props) => {
  const { userInfo } = props;
  const email = userInfo ? userInfo.email : null;
  const logOutMessage = 'Log Out';
  const logOut = async () => {
    await firebase.auth().signOut();
    props.setUserInfo(null);
  };
  const homeTitle = 'Home';
  const usersTitle = 'Users';
  return (
    <div style={styles.box}>
      <p style={styles.text}>{email}</p>
      <Link to={ROUTES.LANDING} style={styles.title}>
        <h1>{homeTitle}</h1>
      </Link>
      <Link to={ROUTES.HOME} style={styles.title}>
        <h1>{usersTitle}</h1>
      </Link>
      <Link to={ROUTES.LANDING}>
        <button style={styles.logout} type="submit" onClick={logOut}><u>{logOutMessage}</u></button>
      </Link>
    </div>
  );
};

export default (connect(null, mapDispatchToProps)(LoggedInHeader)
: ComponentType<ComponentProps>);
