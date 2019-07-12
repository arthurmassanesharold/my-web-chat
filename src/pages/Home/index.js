// @flow
import React, { type ComponentType } from 'react';
import * as ROUTES from 'constants/routes';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserInfo } from 'selectors/user';

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
});

type ComponentProps = {|
  userInfo: UserInfo,
|}

type Props = {|
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>
|};

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: 'darkgreen',
    fontSize: '25px',
    fontStyle: 'italic',
  },
  title: {
    alignItems: 'center',
    color: 'darkgreen',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
};

const HomePage = (props: Props) => {
  const { userInfo } = props;
  if (!userInfo) {
    return (<Redirect to={ROUTES.SIGN_IN} />);
  }
  const name = userInfo.username ? userInfo.username : 'there';
  const message = `Hello, ${name}`;
  const usersMessage = 'Users:';
  return (
    <div style={styles.box}>
      <h1 style={styles.title}>{message}</h1>
      <p style={styles.text}>{usersMessage}</p>
    </div>
  );
};

export default (connect(mapStateToProps)(HomePage)
: ComponentType<ComponentProps>);
