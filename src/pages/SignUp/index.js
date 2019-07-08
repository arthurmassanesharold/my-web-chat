// @flow
import React, { useState } from 'react';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { firestore } from 'config';
import firebase from 'firebase';
import Spacer from 'components/Spacer';

type Credentials = {|
  email: string,
  password: string,
|}

const InputField = () => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = async (event) => {
    event.preventDefault();
    await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    await firestore.collection('users').add({
      name: credentials.email,
    });
    setCredentials({ email: '', password: '' });
  };
  const SignUpMessage = 'Sign Up';
  const ButtonMessage = 'Enter';
  return (
    <>
      <h1>{SignUpMessage}</h1>
      <form onSubmit={addUser}>
        <EmailInput email={credentials.email} updateInput={updateInput} />
        <Spacer size={15} />
        <PasswordInput password={credentials.password} updateInput={updateInput} />
        <Spacer size={15} />
        <button type="submit">{ButtonMessage}</button>
      </form>
    </>
  );
};

export default InputField;
