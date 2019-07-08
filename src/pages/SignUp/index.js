// @flow
import React, { useState } from 'react';
import UserNameInput from 'components/UsernameInput';
import PasswordInput from 'components/PasswordInput';
import { firestore } from 'config';
// import firebase from 'firebase';
import Spacer from 'components/Spacer';

type Credentials = {|
  password: ?string,
  username: ?string,
|}

const InputField = () => {
  const [credentials, setCredentials] = useState<Credentials>({ password: null, username: null });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    const db = firestore;
    // firebase.auth().createUserWithEmailAndPassword(credentials.username, credentials.password);
    db.collection('users').add({
      name: credentials.username,
    });
    setCredentials({ password: null, username: null });
  };
  const ButtonMessage = 'Enter';
  const Button = <button type="submit">{ButtonMessage}</button>;
  return (
    <>
      <form onSubmit={addUser}>
        <UserNameInput username={credentials.username} updateInput={updateInput} />
        <Spacer size={15} />
        <PasswordInput password={credentials.password} updateInput={updateInput} />
        <Spacer size={15} />
        {Button}
      </form>
    </>
  );
};

const SignupPage = () => {
  const SignUpMessage = 'Sign Up';
  return (
    <>
      <h1>{SignUpMessage}</h1>
      <InputField />
    </>

  );
};
export default SignupPage;
