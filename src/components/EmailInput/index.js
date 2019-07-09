// @flow
import React from 'react';

type Props = {|
  email: ?string,
  updateInput: Function,
|}

const styles = {
  input: {
    border: '1px solid green',
    borderRadius: '3px',
    color: 'darkgreen',
  },
};

const EmailInput = (props: Props) => {
  const { email, updateInput } = props;
  return (
    <input
      type="text"
      name="email"
      onChange={updateInput}
      placeholder="email"
      value={email}
      style={styles.input}
    />
  );
};

export default EmailInput;
