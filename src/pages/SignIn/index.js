// @flow
import React, { useState } from 'react';
import Spacer from 'components/Spacer';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import firebase from 'config';

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

const SignInMessage = 'Sign In';
const ButtonMessage = 'Enter';

const SignInPage = () => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const signIn = async (event) => {
    try {
      event.preventDefault();
      await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
    }
  });
  return (
    <>
      <div style={styles.box}>
        <h1>{SignInMessage}</h1>
        <form onSubmit={signIn}>
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

export default SignInPage;
