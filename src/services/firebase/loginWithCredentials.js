// @flow
import firebase, { firestore } from 'config';

export const signInWithCredentials = async (credentials: Credentials) => (
  firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
);

export const addUserToFirestore = async (credentials: { login: Credentials, uid:string }) => (
  firestore.collection('users').add({
    email: credentials.login.email,
    id: credentials.uid,
    username: credentials.login.username,
  })
);

export const createUserWithCredentials = async (credentials: Credentials) => {
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    return user;
  } catch (error) {
    alert(error.message);
    throw new Error(error);
  }
};
