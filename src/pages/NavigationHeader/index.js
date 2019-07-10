// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import AuthenticationHeader from 'components/AuthenticationHeader';
import Greeting from 'components/Greeting';
import { selectIsLoggedIn, selectUserInfo } from 'selectors/user';

type Props = {|
  isLoggedIn: boolean,
  userInfo: UserInfo,
|};

const mapStateToProps = (state) => (
  {
    isLoggedIn: selectIsLoggedIn(state),
    userInfo: selectUserInfo(state),
  }
);

const HomeTitle = 'Home';

const styles = {
  navBox: {
    backgroundColor: 'lightgreen',
    border: '5px inset green',
    padding: '15px',
  },
  title: {
    alignItems: 'center',
    color: 'darkgreen',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
};

const NavigationHeader = (props: Props) => {
  const { isLoggedIn, userInfo } = props;
  return (
    <>
      <div style={styles.navBox}>
        <Link to={ROUTES.LANDING} style={styles.title}>
          <h1>{HomeTitle}</h1>
        </Link>
        {isLoggedIn ? <Greeting userInfo={userInfo} /> : <AuthenticationHeader />}
      </div>
    </>
  );
};

export default connect(mapStateToProps)(NavigationHeader);
