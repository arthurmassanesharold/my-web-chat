// @flow

import React from 'react';

const style = {
  input: {
    border: '2px ridge green',
    borderRadius: '3px',
    color: 'darkgreen',
    display: 'flex',
    height: '25px',
    margin: '20px 0',
    width: '95%',
  },
};

type Props = {|
  recipient: ?string,
  updateRecipient: Function,
|}

const RecipientInput = (props: Props) => {
  const { recipient, updateRecipient } = props;
  return (
    <input
      type="text"
      name="recipient"
      onChange={updateRecipient}
      placeholder="To: (enter recipient's email)"
      value={recipient}
      style={style.input}
    />
  );
};

export default RecipientInput;
