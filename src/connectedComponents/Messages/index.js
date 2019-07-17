// @flow
import React from 'react';

const styles = {
  main: {
    backgroundColor: 'green',
    color: 'white',
    display: 'flex',
    flex: '4',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '20px',
  },
  title: {
    backgroundColor: 'darkgreen',
    marginTop: '0',
    textAlign: 'center',
  },
};

const MessageList = () => {
  const messageText = 'Messages';
  return (
    <>
      <div style={styles.main}>
        <h1 style={styles.title}>{messageText}</h1>
      </div>
    </>
  );
};

export default MessageList;
