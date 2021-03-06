// @flow
import React, { type ComponentType, useState, useEffect } from 'react';
import * as ROUTES from 'constants/routes';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserInfo, selectUserList } from 'selectors/user';
import UserTable from 'components/UserTable/index';
import { fetchAllUsers } from 'services/firestore/fetchUsername';
import Spacer from 'components/Spacer';
import { setMessages } from 'pages/Messages/actions';

const mapDispatchToProps = {
  setMessages,
};

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
  userList: selectUserList(state),
});

type ComponentProps = {|
  userInfo: UserInfo,
  userList: UserList,
  selectedUserForConversation: ?UserInfo,
|}

type Props = {|
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>,
  ...$ExtractObject<typeof mapDispatchToProps>
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

const HomePage = (props: Props) => {
  const { userInfo } = props;
  const [usersList, setUsersList] = useState<UserList>({});
  useEffect(() => {
    const fetchAndSetUsersList = async () => {
      const allUsers = await fetchAllUsers();
      setUsersList(allUsers);
    };
    fetchAndSetUsersList();
  }, [userInfo]);
  if (!userInfo) {
    return (<Redirect to={ROUTES.SIGN_IN} />);
  }
  const name = userInfo.username ? userInfo.username : 'there';
  const message = `Hello, ${name}`;
  const usersMessage = 'Users:';
  const messageTitle = 'Click on a user to view your conversation';
  return (
    <>
      <div style={styles.box}>
        <h1 style={styles.title}>{message}</h1>
      </div>
      <h2><span style={styles.text}>{usersMessage}</span></h2>
      <Spacer size={20} />
      <UserTable users={usersList} />
      <p style={styles.text}><i>{messageTitle}</i></p>
    </>
  );
};

export default (connect(mapStateToProps, mapDispatchToProps)(HomePage)
: ComponentType<ComponentProps>);
