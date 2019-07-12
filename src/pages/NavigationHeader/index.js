// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import AuthenticationHeader from 'components/AuthenticationHeader';
import LoggedInHeader from 'components/LoggedInHeader';
import { selectUserInfo } from 'selectors/user';

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
});

type Props = {|
  ...$ExtractReturn<typeof mapStateToProps>
|};

const styles = {
  auth: {
    display: 'flex',
    justifyContent: 'center',
  },
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
  const homeTitle = 'Home';
  const { userInfo } = props;
  return (
    <>
      <div style={styles.navBox}>
        <Link to={ROUTES.LANDING} style={styles.title}>
          {!userInfo && <h1>{homeTitle}</h1>}
        </Link>
        {userInfo ? <LoggedInHeader userInfo={userInfo} />
          : <AuthenticationHeader style={styles.auth} />}
      </div>
    </>
  );
};

export default connect(mapStateToProps)(NavigationHeader);
