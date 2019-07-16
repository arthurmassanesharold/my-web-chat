// @flow
import React, { useState, type ComponentType } from 'react';
import MessageInput from 'components/MessageInput';
import RecipientInput from 'components/RecipientInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserInfo } from 'selectors/user';
import * as ROUTES from 'constants/routes';
import { firestore } from 'config';
import MessageList from 'connectedComponents/Messages';
import isExistingUser from 'services/firestore/fetchUsername';

const styles = {
  box: {
    alignSelf: 'center',
    flex: 2,
    marginLeft: '5%',
    // width: '100%',
  },
  button: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'vertical',
    flexShrink: '0',
  },
};

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
});

type Message = {|
  message: ?string,
  recipient: string,
|}

type ComponentProps = {|
  userInfo: UserInfo,
|}
type Props = {|
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>
|};

const MessagesPage = (props: Props) => {
  const { userInfo } = props;
  const [message, updateMessage] = useState<Message>({ message: '', recipient: '' });
  if (!userInfo) return (<Redirect to={ROUTES.SIGN_IN} />);
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
      if (!message.recipient || !message.message) {
        throw new Error('Message or recipient is empty');
      } else if (message.recipient === userInfo.email) {
        throw new Error(`Stop trying to send messages to yourself, ${userInfo.username || ''}`);
      } else if (!await isExistingUser(message.recipient)) {
        const errMessage = `User ${message.recipient} does not exist`;
        throw new Error(errMessage);
      }
      await firestore.collection('messages').add({
        content: message.message,
        from: userInfo.email,
        to: message.recipient,
      });
      updateMessage({ message: '', recipient: message.recipient });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div style={styles.main}>
      <div style={styles.box}>
        <form onSubmit={submitMessage}>
          <RecipientInput
            recipient={message.recipient}
            updateRecipient={updateInput}
          />
          <MessageInput
            message={message.message}
            updateMessage={updateInput}
          />
          <button type="submit" style={styles.button}>{sendMessageText}</button>
        </form>
      </div>
      <MessageList />
    </div>
  );
};

export default (connect(mapStateToProps)(MessagesPage)
:ComponentType<ComponentProps>);
