// @flow
import React from 'react';
import _ from 'lodash';

const styles = {
  head: {
    backgroundColor: 'darkgreen',
    color: 'white',
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: '25px',
    marginLeft: '5%',
    width: '50%',

  },
  tEven: {
    backgroundColor: 'lightgreen',
    border: '1px solid green',
    padding: '8px',
    textAlign: 'left',
  },
  tOdd: {
    backgroundColor: '#c3e6bc',
    border: '1px solid green',
    padding: '8px',
    textAlign: 'left',
  },
};

type User = {|
  username?: string,
  email?: string,
|};

const UserTable = ({ users }: {| users: Array<User> |}) => {
  const even = 2;
  const list = _.map(users, (el, index:number) => (
    <tr>
      <td style={index % even !== 0 ? styles.tEven : styles.tOdd}>{el.username}</td>
      <td style={index % even !== 0 ? styles.tEven : styles.tOdd}>{el.email}</td>
    </tr>
  ));
  const UsernameText = 'Username';
  const EmailText = 'Email';
  return (
    <table style={styles.table}>
      <tr>
        <th style={styles.head}>{UsernameText}</th>
        <th style={styles.head}>{EmailText}</th>
      </tr>
      {list}
    </table>
  );
};

export default UserTable;
