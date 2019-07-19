// @flow

import React from 'react';

const style = {
  input: {
    border: '2px ridge green',
    borderRadius: '3px',
    color: 'darkgreen',
    display: 'flex',
    fontSize: '20px',
    height: '100px',
    margin: '20px 0',
    resize: 'none',
    rows: '20',
    textAlign: 'left',
    verticalAlign: 'top',
    width: '100%',
  },
};

type Props = {|
  message: ?string,
  updateMessage: Function,
|}

const MessageInput = (props: Props) => {
  const { message, updateMessage } = props;
  return (
    <textarea
      type="text"
      name="message"
      onChange={updateMessage}
      placeholder="Message"
      value={message}
      style={style.input}
    />
  );
};

export default MessageInput;
