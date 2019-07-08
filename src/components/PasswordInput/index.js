// @flow
import React from 'react';

type Props = {|
  password: ?string,
  updateInput: Function,
|}

const PasswordInput = (props: Props) => {
  const { password, updateInput } = props;
  return (
    <input
      type="password"
      name="password"
      onChange={updateInput}
      placeholder="password"
      value={password}
    />
  );
};

export default PasswordInput;
