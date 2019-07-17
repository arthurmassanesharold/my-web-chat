// @flow
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const styles = {
  head: {
    backgroundColor: 'darkgreen',
    color: 'white',
  },
  route: {
    color: 'black',
    textDecoration: 'none',
  },
  table: {
    border: '5px inset green',
    borderCollapse: 'collapse',
    fontSize: '25px',
    marginLeft: '5%',
    width: '50%',
  },
  tEven: {
    backgroundColor: 'lightgreen',
    border: '1px solid green',
    padding: '8px',
  },
  tOdd: {
    backgroundColor: '#c3e6bc',
    border: '1px solid green',
    padding: '8px',
  },
};
const UserTable = ({ users }: {| users: UserList |}) => {
  const list = _.map(users, (el) => (
    <tr key={el.id}>
      <td style={styles.tEven}>{el.username}</td>
      <td style={styles.tEven}>{el.email}</td>
    </tr>
  ));
  const UsernameText = 'Username';
  const EmailText = 'Email';
  return (
    <Link to={ROUTES.MESSAGES} style={styles.route}>
      <table style={styles.table}>
        <tbody>
          <tr>
            <th style={styles.head}>{UsernameText}</th>
            <th style={styles.head}>{EmailText}</th>
          </tr>
          {list}
        </tbody>
      </table>
    </Link>
  );
};

export default UserTable;
