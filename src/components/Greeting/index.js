// @flow
import React from 'react';

type Props = {|
  userInfo: UserInfo,
|};

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    color: 'darkgreen',
    fontSize: '25px',
    fontStyle: 'italic',
  },
};

const Greeting = (props: Props) => {
  const { userInfo: { email } } = props;
  const logOutMessage = 'Log Out';
  return (
    <div style={styles.box}>
      <p style={styles.text}>{email}</p>
      <p style={styles.text}><u>{logOutMessage}</u></p>
    </div>
  );
};

export default Greeting;
