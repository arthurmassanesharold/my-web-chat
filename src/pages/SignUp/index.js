// @flow
import React, { useState } from 'react';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { firestore } from 'config';
import firebase from 'firebase';
import Spacer from 'components/Spacer';

const styles = {
  box: {
    color: 'darkgreen',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
  },
};

type Credentials = {|
  email: string,
  password: string,
|}

const SignUpPage = () => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = async (event) => {
    try {
      event.preventDefault();
      await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
      await firestore.collection('users').add({
        email: credentials.email,
      });
      setCredentials({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };
  const SignUpMessage = 'Sign Up';
  const ButtonMessage = 'Enter';
  return (
    <>
      <div style={styles.box}>
        <h1>{SignUpMessage}</h1>
        <form onSubmit={addUser}>
          <EmailInput email={credentials.email} updateInput={updateInput} />
          <Spacer size={15} />
          <PasswordInput password={credentials.password} updateInput={updateInput} />
          <Spacer size={15} />
          <button type="submit" style={styles.button}>{ButtonMessage}</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
