// @flow
import { firestore } from 'config';
import _ from 'lodash';

export const isExistingUser = async (email: string) => {
  const doc = await firestore
    .collection('users')
    .get();
  const users = doc.docs.map((item) => (item.data()));
  return (_.includes(users, email));
};

export const fetchAllUsers = async () => {
  const doc = await firestore
    .collection('users')
    .get();
  const users = doc.docs.map((item) => (item.data()));
  const usersObject = users.reduce(
    (obj, item) => ({ ...obj, [item.id]: item }),
    {}
  );
  return (usersObject);
};

const fetchUsernameByEmail = async (email: string) => {
  const user = await firestore
    .collection('users')
    .where('email', '==', email)
    .get();
  if (user.docs[0]) {
    return (user.docs[0].data());
  }
  return (null);
};

export default fetchUsernameByEmail;
