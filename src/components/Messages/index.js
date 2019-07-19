// @flow
import React, { type ComponentType } from 'react';
import _ from 'lodash';
import { selectMessagesByOtherUserEmailSortByDate } from 'selectors/messagesSelectors';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const styles = {
  main: {
    display: 'flex',
    flex: '3',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '20px',
  },
  receivedMessage: {
    alignItems: 'flex-start',
    color: 'lightgreen',
    textAlign: 'right',
  },
  sentMessage: {
    alignItems: 'flex-end',
    color: 'darkgreen',
    textAlign: 'left',
  },
  title: {
    backgroundColor: 'darkgreen',
    color: 'white',
    marginTop: '0',
    textAlign: 'center',
  },
};

type ComponentProps = {|
  loggedUser: UserInfo,
  otherUserEmail: string,
|}

// eslint-disable-next-line no-use-before-define
const mapStateToProps = (state: State, componentProps: ComponentProps) => ({
  conversationMessages: selectMessagesByOtherUserEmailSortByDate(componentProps.otherUserEmail)(state),
});


type Props = {|
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>
|}

const MessageList = (props: Props) => {
  const messageText = 'Messages';
  const { conversationMessages, loggedUser } = props;
  const separator = ' - ';
  const thousand = 1000;
  const messageList = _.map(conversationMessages, (message) => (
    <div style={message.from === loggedUser.email ? styles.receivedMessage : styles.sentMessage}>
      <Message
        className="messageClass"
        compact
        key={message.id}
        header={message.content}
        size="big"
        color={message.from === loggedUser.email ? 'olive' : 'green'}
        content={message.from + separator + new Date(message.time.seconds * thousand).toLocaleDateString()}
      />
    </div>
  ));
  return (
    <>
      <div style={styles.main}>
        <h1 style={styles.title}>{messageText}</h1>
        <div style={{ height: '666px', overflowY: 'scroll' }}>
          {messageList}
        </div>
      </div>
    </>
  );
};

export default (connect(mapStateToProps)(MessageList)
: ComponentType<ComponentProps>);
