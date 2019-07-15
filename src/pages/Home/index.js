// @flow
import React, { type ComponentType, useState, useEffect } from 'react';
import * as ROUTES from 'constants/routes';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserInfo } from 'selectors/user';
import UserTable from 'components/UserTable/index';
import { fetchAllUsers } from 'services/firestore/fetchUsername';
import Spacer from 'components/Spacer';

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
    marginLeft: '5%',
  },
  title: {
    alignItems: 'center',
    color: 'darkgreen',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
};

type User = {|
  username?: string,
  email?: string,
|};

const HomePage = (props: Props) => {
  const initialState = [];
  const [usersList, setUsersList] = useState<Array<User>>(initialState);
  useEffect(() => {
    const fetchAndSetUsersList = async () => {
      const allUsers = await fetchAllUsers();
      setUsersList(allUsers);
    };
    fetchAndSetUsersList();
  });
  const { userInfo } = props;
  if (!userInfo) {
    return (<Redirect to={ROUTES.SIGN_IN} />);
  }
  const name = userInfo.username ? userInfo.username : 'there';
  const message = `Hello, ${name}`;
  const usersMessage = 'Users:';
  return (
    <>
      <div style={styles.box}>
        <h1 style={styles.title}>{message}</h1>
      </div>
      <h2><span style={styles.text}>{usersMessage}</span></h2>
      <Spacer size={20} />
      <UserTable users={usersList} />
    </>
  );
};

export default (connect(mapStateToProps)(HomePage)
: ComponentType<ComponentProps>);
