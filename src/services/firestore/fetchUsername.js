// @flow
import { firestore } from 'config';

export const fetchAllUsers = async () => {
  const doc = await firestore
    .collection('users')
    .get();
  const users = doc.docs.map((item) => (item.data()));
  const usersObject = users.reduce(
    (obj, item) => ({ ...obj, [item.uid]: item }),
    {}
  );
  return (usersObject);
};

const fetchUsernameByEmail = async (email: string) => {
  const user = await firestore
    .collection('users')
    .where('email', '==', email)
    .get();
  return (user.docs[0].data());
};

export default fetchUsernameByEmail;
