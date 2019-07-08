// @flow
import React from 'react';

type Props = {|
  email: ?string,
  updateInput: Function,
|}

const EmailInput = (props: Props) => {
  const { email, updateInput } = props;
  return (
    <input
      type="text"
      name="email"
      onChange={updateInput}
      placeholder="email"
      value={email}
    />
  );
};

export default EmailInput;
