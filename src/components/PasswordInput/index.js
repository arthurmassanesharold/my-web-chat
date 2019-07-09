// @flow
import React from 'react';

type Props = {|
  password: ?string,
  updateInput: Function,
|}

const styles = {
  input: {
    border: '1px solid green',
    borderRadius: '3px',
    color: 'darkgreen',
  },
};

const PasswordInput = (props: Props) => {
  const { password, updateInput } = props;
  return (
    <input
      type="password"
      name="password"
      onChange={updateInput}
      placeholder="password"
      value={password}
      style={styles.input}
    />
  );
};

export default PasswordInput;
