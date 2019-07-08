// @flow
import React from 'react';

type Props = {|
  username: ?string,
  updateInput: Function,
|}

const UserNameInput = (props: Props) => {
  const { username, updateInput } = props;
  return (
    <input
      type="text"
      name="username"
      onChange={updateInput}
      placeholder="username"
      value={username}
    />
  );
};

export default UserNameInput;
