// @flow
import React from 'react';

const styles = {
  main: {
    backgroundColor: 'green',
    color: 'white',
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    marginTop: '10px',
  },
};

const MessageList = () => {
  const hello = 'hello';
  const messageText = 'Messages';
  return (
    <>
      <div style={styles.main}>
        <h1 style={{ color: 'white' }}>{messageText}</h1>
        <p>{hello}</p>
      </div>
    </>
  );
};

export default MessageList;
