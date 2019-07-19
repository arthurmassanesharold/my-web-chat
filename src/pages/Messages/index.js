// @flow
import React, { useState, type ComponentType } from 'react';
import MessageInput from 'components/MessageInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserInfo, selectSelectedUserForConversation } from 'selectors/user';
import * as ROUTES from 'constants/routes';
import { firestore } from 'config';
import MessageList from 'components/Messages';
import isExistingUser from 'services/firestore/fetchUsername';
import moment from 'moment';
import _ from 'lodash';
import generateUniqueId from 'services/generateUniqueId';

const styles = {
  box: {
    backgroundColor: 'lightgrey',
    border: '2px solid green',
    flex: '1',
    height: '100%',
    margin: '20px 0',
    marginLeft: '1%',
    padding: '1%',
  },
  button: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
    width: '100%',
  },
  main: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
};

const mapStateToProps = (state: State) => ({
  selectedUserForConversation: selectSelectedUserForConversation(state),
  userInfo: selectUserInfo(state),
});

type UserMessage = {|
  message: ?string,
|}

type ComponentProps = {|
  userInfo: UserInfo,
|}
type Props = {|
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>
|};

const MessagesPage = (props: Props) => {
  const { userInfo, selectedUserForConversation } = props;
  const [message, updateMessage] = useState<UserMessage>({ message: '' });
  if (!userInfo) return (<Redirect to={ROUTES.SIGN_IN} />);
  if (!selectedUserForConversation) return (<Redirect to={ROUTES.HOME} />);
  const sendMessageText = 'Send';
  const updateInput = (event) => {
    updateMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  const submitMessage = async (event) => {
    try {
      event.preventDefault();
      if (!message.message) {
        throw new Error('Message is empty');
      } else if (!await isExistingUser(selectedUserForConversation.email)) {
        const errMessage = `User ${selectedUserForConversation.email} does not exist`;
        throw new Error(errMessage);
      }
      await firestore.collection('messages').add({
        content: message.message,
        from: userInfo.email,
        id: generateUniqueId(),
        time: moment(_.now()).toDate(),
        to: selectedUserForConversation.email,
        userEmails: [userInfo.email, selectedUserForConversation.email],
      });
      updateMessage({ message: '' });
    } catch (error) {
      alert(error);
    }
  };
  const conversationMessage = 'Your messages with ';
  const recipient = `${selectedUserForConversation.username || ''} <${selectedUserForConversation.email}>`;
  return (
    <>
      <h1 style={{ color: 'green', marginLeft: '1%' }}>
        {conversationMessage}
        <u style={{ fontStyle: 'italic' }}>{recipient}</u>
      </h1>
      <div style={styles.main}>
        <div style={styles.box}>
          <form onSubmit={submitMessage}>
            <MessageInput
              message={message.message}
              updateMessage={updateInput}
            />
            <button type="submit" style={styles.button}>{sendMessageText}</button>
          </form>
        </div>
        <MessageList
          loggedUser={userInfo}
          selectedUserEmail={selectedUserForConversation.email}
        />
      </div>
    </>
  );
};

export default (connect(mapStateToProps)(MessagesPage)
:ComponentType<ComponentProps>);
