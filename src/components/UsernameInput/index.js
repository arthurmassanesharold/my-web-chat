// @flow
import React from 'react';

type Props = {|
  username: ?string,
  updateInput: Function,
|}

const styles = {
  input: {
    border: '1px solid green',
    borderRadius: '3px',
    color: 'darkgreen',
  },
};

const UsernameInput = (props: Props) => {
  const { username, updateInput } = props;
  return (
    <input
      type="text"
      name="username"
      onChange={updateInput}
      placeholder="username"
      value={username}
      style={styles.input}
    />
  );
};

export default UsernameInput;
